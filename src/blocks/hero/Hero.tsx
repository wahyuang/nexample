"use client";
import { ButtonSolid } from "@/components/buttons";
import { motion } from "framer-motion";
import Image from "next/image";

import type { ImageType, CTA } from "@/types/common";

type HeroProps = {
  title?: string;
  content?: string;
  cta?: CTA;
  image?: ImageType;
};

export const Hero = ({ title, content, cta, image }: HeroProps) => {
  return (
    <div className="relative h-[55vh] p-10 rounded-md bg-sky-500 overflow-hidden">
      {image && (
        <motion.div
          className="absolute top-0 left-0 z-10 w-full h-full transform"
          initial={{ scale: 1.1 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.7,
            },
          }}
        >
          <Image
            src={image.url}
            className="absolute top-0 left-0 object-cover w-full h-full"
            alt={image.alt}
            fill
            placeholder={image.placeholder ? `blur` : undefined}
            blurDataURL={image.placeholder ? image.placeholder : undefined}
          />
        </motion.div>
      )}
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-opacity-70 bg-sky-700"></div>
      <motion.div
        className="absolute z-30 w-1/2 text-white bottom-10 left-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        }}
      >
        {title && (
          <div
            className="text-2xl font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        <div className="mt-6">
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

          {cta && (
            <div>
              <ButtonSolid href={cta.url}>{cta.title}</ButtonSolid>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
