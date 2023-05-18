import type { Block } from "@/types/api/block";
import type { Media } from "@/types/api/media";

export type Hero = Block & {
  title: string;
  content: string;
  media_image: {
    data: Media | null;
  };
};
