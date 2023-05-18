"use client";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { CTA } from "@/types/common";
import Link from "@/components/link";

type SimpleTextProps = {
  title?: string;
  content?: string;
  cta?: CTA;
};

export const SimpleText = ({ title, content, cta }: SimpleTextProps) => {
  return (
    <motion.div
      className="py-12"
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="flex justify-center">
        <div className="w-full text-center md:w-1/2">
          <div>
            {title && (
              <h2
                className="text-3xl font-bold text-sky-500"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
          {content && (
            <div
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {cta && (
            <div className="mt-6">
              <div className="flex justify-center">
                <Link
                  href={cta.url}
                  className="flex items-center justify-center hover:text-sky-500 group"
                  target={cta.target ? cta.target : undefined}
                >
                  {cta.title}
                  <BsArrowRight className="ml-2 transition-all duration-300 group-hover:ml-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
