import { Media } from "../Media";
import { ImageType } from "@/types/common";

export interface CardBlogProps {
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: ImageType;
}
