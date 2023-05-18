import { Block } from "@/types/api/block";
import { Media } from "@/types/api/media";
import { CTAButtonType } from "@/types/api/cta-button";

export type MediaTextApi = Block & {
  title: string;
  content: string;
  image_position: "left" | "right";
  media_image: {
    data: Media[];
  };
  cta_button: CTAButtonType | null;
};
