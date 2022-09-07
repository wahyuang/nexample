import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const CardBlog = () => {
  return (
    <div className="relative rounded-md">
      <div className="w-full h-[270px] bg-gray-200 rounded-md"></div>
      <div className="p-5">
        <div>
          <h3 className="text-xl font-bold">
            <Link href="/">
              <a>Article Title</a>
            </Link>
          </h3>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            magnam amet atque eos impedit ipsum, repellendus velit eaque ex ad
            iste laboriosam. Officiis, soluta illo facere vitae commodi
            voluptatibus quis.
          </p>
        </div>
        <div className="flex justify-start mt-5">
          <Link href="/blog/article">
            <a className="flex items-center text-sm group hover:text-sky-500">
              Read more{" "}
              <BsArrowRight className="ml-2 transition-[margin] group-hover:ml-3" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
