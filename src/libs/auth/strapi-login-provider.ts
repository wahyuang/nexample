import CredentialsProvider from "next-auth/providers/credentials";

const STRAPI_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const StrapiLoginProvider = CredentialsProvider({
  id: `credentials`,
  name: `Strapi Auth`,
  type: `credentials`,
  credentials: {},
  async authorize(credentials) {
    const { email, password } = credentials as {
      email: string;
      password: string;
    };

    const req = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    const res = await req.json();

    if (req.status == 200) {
      return res;
    } else {
      // return null;
      throw new Error(`Wrong email or password`);
    }
  },
});
