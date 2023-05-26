// import NextAuth from "next-auth";
import NextAuth from "@/types/next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth/session";

declare module "next-auth" {
  interface Session {
    jwt: string;
    id: number;
  }

  interface User {
    jwt: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    jwt: string;
    id: number;
  }
}
