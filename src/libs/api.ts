import { Payload } from "@/types/payload";
import { MiniPost, Post } from "@/types/api/post";
import qs from "qs";
import { Page } from "@/types/api/page";
import { NavMenu } from "@/types/api";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export default async function strapi(
  endpoint: string,
  params = {},
  options = {}
) {
  const queryParams = qs.stringify(params, { addQueryPrefix: true });

  return await fetch(
    `${BACKEND_URL}${endpoint}${queryParams ? queryParams : ``}`,
    {
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${TOKEN}`,
      },
      next: { revalidate: 1 },
      ...options,
    }
  )
    .then(async (response) => {
      if (response.status >= 200 && response.status < 299) {
        return response.json();
      }

      // Log fetch failed => Response Promise
      console.log(`Fail fetch ${endpoint}`);
      console.log(await response.json());

      return null;
    })
    .catch((error) => {
      // Log error
      console.log(error);

      return null;
    });
}

export const getHomepage = async () => {
  const HomepageSlug = process.env.NEXT_PUBLIC_HOMEPAGE_SLUG;

  const req = await strapi(`/api/pages`, {
    filters: {
      slug: {
        $eq: HomepageSlug,
      },
    },
    populate: `deep`,
  });

  return req as Payload<Page[]>;
};

export const getPage = async (slug: string) => {
  const req = await strapi(`/api/pages`, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: `deep`,
  });

  return req as Payload<Page[]>;
};

export const getPages = async () => {
  const req = await strapi(`/api/pages`, {
    pagination: {
      pageSize: 100,
    },
  });

  return req as Payload<Page[]>;
};

export const getPosts = async () => {
  const req = await strapi(`/api/blogs`, {
    pagination: {
      pageSize: 12,
    },
    sort: `publishedAt`,
    populate: `featured_image`,
  });

  return req as Payload<MiniPost[]>;
};

export const getPost = async (slug: string) => {
  const req = await strapi(`/api/blogs/${slug}`, {
    populate: `deep`,
  });

  return req as Payload<Post>;
};

export const getNavMenu = async (slug: string) => {
  const req = await strapi(`/api/menus`, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      0: `items`,
      items: {
        populate: {
          0: `page_item`,
        },
      },
    },
    nested: true,
  });

  return req as Payload<NavMenu[]>;
};

export const fetchAPI = async (
  query: string,
  { variables }: Record<string, unknown>
) => {
  const headers = {
    "Content-Type": `application/json`,
  };

  const req = await fetch(`${BACKEND_URL}/graphql`, {
    method: `POST`,
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

// export const getPosts = async ({
//   perPage = 15,
//   mediaSize = "LARGE",
// }: {
//   perPage?: number;
//   mediaSize?: "LARGE" | "MEDIUM";
// }): Promise<Posts> => {
//   const req = await fetchAPI(
//     `query getPosts($size: MediaItemSizeEnum = LARGE, $first: Int = 15) {
//       posts(first: $first) {
//         nodes {
//           title
//           slug
//           excerpt(format: RENDERED)
//           featuredImage {
//             node {
//               title
//               sourceUrl(size: $size)
//               sizes
//               mediaDetails {
//                 height
//                 width
//               }
//             }
//           }
//         }
//       }
//     } `,
//     {
//       variables: {
//         size: mediaSize,
//         first: perPage,
//       },
//     }
//   );

//   return req;
// };
