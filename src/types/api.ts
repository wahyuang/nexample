import { Media } from "./Media";

export type Error = {
  code: number;
  message: string;
};

export interface Posts {
  posts: {
    nodes: Array<{
      title: string;
      slug: string;
      excerpt: string;
      featuredImage: Media;
    }>;
  };
}
