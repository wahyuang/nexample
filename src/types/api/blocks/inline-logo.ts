import { Block } from "@/types/api/block";
import { Media } from "@/types/api/media";

export type InlineLogoBlock = Block & {
  title: string;
  logo_gallery: {
    data: Media[] | null;
  };
};
