import Image from "@/components/image";
import { ImageType } from "@/types/common";

type InlineLogoProps = {
  title?: string;
  images?: ImageType[];
};

export default function InlineLogo({ title, images }: InlineLogoProps) {
  return (
    <div className="py-12">
      <div>
        {title && (
          <h2
            className="text-3xl font-bold text-center text-sky-500"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>
      <div className="flex justify-center mt-10">
        {images &&
          images.map((logo, index) => {
            const { url, alt, placeholder } = logo;

            return (
              <div className="px-4" key={`logo-${index}`}>
                <div className="relative w-20 h-20 bg-gray-200 rounded-md">
                  <Image
                    src={url}
                    alt={alt ? alt : `inline-logo`}
                    fill
                    placeholder={placeholder ? `blur` : undefined}
                    blurDataURL={placeholder ? placeholder : undefined}
                    className="absolute top-0 left-0 object-contain w-full h-full"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
