import { Block } from "@/types/api/block";

export type NewsletterBlock = Block & {
  title: string;
  content: string;
};
