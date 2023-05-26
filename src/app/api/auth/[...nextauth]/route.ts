import NextAuth from "next-auth";
import { StrapiLoginProvider } from "@/libs/auth/strapi-login-provider";

const AUTH_SECRET = process.env.NEXTAUTH_SECRET;

const handler = NextAuth({
  secret: AUTH_SECRET,
  providers: [StrapiLoginProvider],
  // setup custom login page
  pages: {
    signIn: `/login`,
  },
  // set strategy to jwt since strapi use jwt for auth
  session: {
    strategy: `jwt`,
  },
  callbacks: {
    // jwt is a callback to use session in client side
    jwt: async ({ token, user }) => {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.user.id;
      }
      return token;
    },
    // add token to cookies in user session
    session: async ({ session, token }) => {
      if (token) {
        session.jwt = token.jwt;
        session.id = token.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
