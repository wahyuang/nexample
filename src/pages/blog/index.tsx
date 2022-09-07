import { CardBlog } from "@/components/cards";

export default function Blog() {
  return (
    <>
      <h1 className="mb-5 text-4xl font-bold leading-normal text-sky-500">
        Blog
      </h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
        <div className="w-full px-4 mb-6 md:w-1/3">
          <CardBlog />
        </div>
      </div>
    </>
  );
}
