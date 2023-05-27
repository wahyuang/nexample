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

export type MenuItem = {
  id: number;
  attributes: {
    order: number;
    title: string;
    url: string;
    target: null | "_blank";
    page_item: {
      data: null | {
        id: number;
        attributes: {
          title: string;
          slug: string;
        };
      };
    };
  };
};

export type NavMenu = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    items: {
      data: MenuItem[];
    };
  };
};

export type ApiResponse<T> = {
  error: ErrorResponse | null;
  payload: T;
};
