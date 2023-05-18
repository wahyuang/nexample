import { CardBlogProps } from "@/types/components/CardBlog";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const CardBlog = ({
  title,
  slug,
  excerpt,
  thumbnail,
}: CardBlogProps) => {
  return (
    <div className="relative rounded-md">
      {thumbnail && (
        <div className="w-full h-[270px] bg-gray-200 rounded-md relative overflow-hidden">
          <Image
            src={thumbnail.url}
            placeholder="blur"
            blurDataURL={thumbnail.placeholder}
            className="absolute inset-0 object-cover"
            alt={thumbnail.alt}
            fill
          />
        </div>
      )}

      <div className="p-5">
        <div>
          {title && (
            <h3 className="text-xl font-bold">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
          )}
        </div>
        {excerpt && (
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: excerpt }} />
        )}

        {slug && (
          <div className="flex justify-start mt-5">
            <Link
              href={`/blog/${slug}`}
              className="flex items-center text-sm group hover:text-sky-500"
            >
              Read more
              <BsArrowRight className="ml-2 transition-[margin] group-hover:ml-3" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
