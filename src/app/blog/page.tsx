"use client";

import { CardBlog } from "@/components/cards";
import { getPosts } from "@/libs/api";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { formatImage } from "@/utils/formatImage";

const Animasi = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const animCard = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default async function BlogRoute() {
  const data = await getPosts();
  const postsData = data.data;

  return (
    <Layout>
      <div className="mb-5 overflow-hidden">
        <motion.h1
          className="mb-0 text-4xl font-bold leading-normal text-sky-500"
          initial={{ y: `100%` }}
          animate={{ y: 0 }}
        >
          Blog
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-wrap -mx-4"
        variants={Animasi}
        initial="hidden"
        animate="show"
      >
        {postsData?.map((post) => {
          const { title, slug, excerpt, featured_image } = post.attributes;

          const postThumbnail = formatImage(featured_image?.data);

          return (
            <motion.div
              className="w-full px-4 mb-6 md:w-1/3"
              variants={animCard}
              key={slug}
            >
              <CardBlog
                title={title}
                slug={slug}
                excerpt={excerpt}
                thumbnail={postThumbnail}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Layout>
  );
}
