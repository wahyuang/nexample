import { cn } from "@/utils/common";
import { HTMLAttributes } from "react";

export default function Skeleton({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(`w-full h-6 bg-slate-200`, className)}></div>;
}
