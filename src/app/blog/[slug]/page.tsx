import Hero from "@/blocks/hero";
import { AiOutlineCalendar } from "react-icons/ai";
import { getPost } from "@/libs/api";
import { notFound } from "next/navigation";
import { formatImage } from "@/utils/formatImage";

export default async function BlogDetailRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const postData = await getPost(slug);

  if (!postData) {
    notFound();
  }

  const { title, featured_image, excerpt } = postData.data.attributes;

  const heroImage = featured_image.data
    ? formatImage(featured_image.data)
    : undefined;

  return (
    <>
      <div className="relative mb-10">
        <div className="text-center">
          {title && (
            <h1
              className="mb-5 text-4xl font-bold leading-normal text-sky-500"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          <div className="flex items-center justify-center text-yellow-300">
            <AiOutlineCalendar className="text-2xl text-sky-500" />
            <div className="ml-2 text-sm text-gray-400">
              Friday, 22 Sept 2022
            </div>
          </div>
        </div>
      </div>

      {heroImage && <Hero image={heroImage} />}

      <div className="max-w-3xl py-12 mx-auto">
        {excerpt && <div>{excerpt}</div>}
      </div>
    </>
  );
}
