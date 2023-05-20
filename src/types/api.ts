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

export type ErrorResponse = {
  status: number;
  message: string;
};

export type AuthUser = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    blocked: boolean;
  };
};

export type ApiResponse<T> = {
  error: ErrorResponse | null;
  payload: T;
};
