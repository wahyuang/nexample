import { Posts } from "@/types/api";

const BACKEND_URL = process.env.BACKEND_URL;

const fetchAPI = async (
  query: string,
  { variables }: Record<string, unknown>
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const req = await fetch(`${BACKEND_URL}/graphql`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const res = await req.json();

  if (res.errors) {
    console.log(res.errors);
    throw new Error(`Failed to fetch API`);
  }

  return res.data;
};

export const getPosts = async ({
  perPage = 15,
  mediaSize = "LARGE",
}: {
  perPage?: number;
  mediaSize?: "LARGE" | "MEDIUM";
}): Promise<Posts> => {
  const req = await fetchAPI(
    `query getPosts($size: MediaItemSizeEnum = LARGE, $first: Int = 15) {
      posts(first: $first) {
        nodes {
          title
          slug
          excerpt(format: RENDERED)
          featuredImage {
            node {
              title
              sourceUrl(size: $size)
              sizes
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    } `,
    {
      variables: {
        size: mediaSize,
        first: perPage,
      },
    }
  );

  return req;
};
