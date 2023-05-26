import Skeleton from "@/components/skeleton";

export default function LoadingBlog() {
  return (
    <div>
      <div className="flex flex-col items-center mb-10">
        <Skeleton className="w-full h-10 max-w-md mb-4" />
        <Skeleton className="w-full h-4 max-w-xs" />
      </div>
      <Skeleton className="w-full rounded-md h-[55vh] mb-10" />
      <div className="flex flex-col mb-10 space-y-4">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}
