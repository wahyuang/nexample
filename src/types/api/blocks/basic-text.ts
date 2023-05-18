import { Block } from "@/types/api/block";
import { CTAButtonType } from "@/types/api/cta-button";

export type BasicTextType = Block & {
  title: string;
  content: string;
  cta_button: CTAButtonType | null;
};
