import { Media } from "../Media";

export interface CardBlogProps {
  data: {
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: Media;
  };
}
