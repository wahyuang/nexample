import type { Block } from "@/types/api/block";

export type Page = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    seo: string[];
    blocks: Block[];
  };
};
