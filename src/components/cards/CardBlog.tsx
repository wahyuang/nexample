import { CardBlogProps } from "@/types/components/CardBlog";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const CardBlog = ({ data }: CardBlogProps) => {
  const { title, slug, excerpt, thumbnail } = data;
  return (
    <div className="relative rounded-md">
      {thumbnail && (
        <div className="w-full h-[270px] bg-gray-200 rounded-md relative overflow-hidden">
          <Image
            src={thumbnail.node.sourceUrl}
            layout="fill"
            className="absolute inset-0 object-cover"
            alt={thumbnail.node.title}
          />
        </div>
      )}

      <div className="p-5">
        <div>
          {title && (
            <h3 className="text-xl font-bold">
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
          )}
        </div>
        {excerpt && (
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: excerpt }} />
        )}

        {slug && (
          <div className="flex justify-start mt-5">
            <Link href={`/blog/${slug}`}>
              <a className="flex items-center text-sm group hover:text-sky-500">
                Read more{" "}
                <BsArrowRight className="ml-2 transition-[margin] group-hover:ml-3" />
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
