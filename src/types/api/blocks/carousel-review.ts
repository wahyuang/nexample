import { Block } from "@/types/api/block";

export type Review = {
  author: string;
  content: string;
};

export type CarouselReviewBlock = Block & {
  title: string;
  reviews: Review[] | null;
};
