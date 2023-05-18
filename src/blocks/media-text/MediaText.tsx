import { ButtonSolid } from "@/components/buttons";
import { CTA, ImageType } from "@/types/common";
import Image from "next/image";
import { cn } from "@/utils/common";

type MediaTextProps = {
  title: string;
  content: string;
  image?: ImageType;
  cta?: CTA;
  reverse?: boolean;
};

export const MediaText = ({
  title,
  content,
  image,
  cta,
  reverse,
}: MediaTextProps) => {
  return (
    <section className="py-12">
      <div
        className={cn(
          `flex flex-wrap items-center justify-between`,
          reverse && `flex-row-reverse`
        )}
      >
        <div className="w-full md:w-1/2 ">
          {image && (
            <div className="relative w-full overflow-hidden rounded-md bg-sky-500">
              <div className="block pt-[72%]"></div>
              <Image
                src={image.url}
                className="absolute top-0 left-0 object-cover w-full h-full"
                alt={image.alt ? image.alt : "card image"}
                fill
                placeholder={image.placeholder ? "blur" : undefined}
                blurDataURL={image.placeholder ? image.placeholder : undefined}
              />
            </div>
          )}
        </div>
        <div className="w-full pt-5 md:w-2/5 md:pt-0">
          <div>
            {title && (
              <h3
                className="text-xl font-bold text-sky-500"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>

          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

          {cta && (
            <div className="mt-5">
              <ButtonSolid className="text-white bg-sky-500" href={cta.url}>
                {cta.title}
              </ButtonSolid>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
