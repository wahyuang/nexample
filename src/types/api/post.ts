import type { Media } from "@/types/api/media";

export type MiniPost = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    featured_image: {
      data: Media;
    };
  };
};

export type Post = MiniPost & {
  attributes: {
    section: Array<{
      id: number;
      sectionID: string;
    }>;
  };
};
