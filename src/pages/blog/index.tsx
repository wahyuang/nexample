import { CardBlog } from "@/components/cards";
import { getPosts } from "@/libs/api";
import { Posts } from "@/types/api";
import { motion } from "framer-motion";

export default function Blog({ postsData }: { postsData: Posts }) {
  return (
    <>
      <div className="mb-5 overflow-hidden">
        <motion.h1
          className="mb-0 text-4xl font-bold leading-normal text-sky-500"
          initial={{ y: "100%" }}
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
        {postsData.posts.nodes?.map((item) => {
          return (
            <motion.div
              className="w-full px-4 mb-6 md:w-1/3"
              variants={animCard}
              key={item.slug}
            >
              <CardBlog
                data={{
                  title: item.title,
                  slug: item.slug,
                  excerpt: item.excerpt,
                  thumbnail: item.featuredImage,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

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

export const getStaticProps = async () => {
  const blogPosts = await getPosts({ perPage: 9 });

  return {
    props: {
      postsData: blogPosts,
    },
  };
};
