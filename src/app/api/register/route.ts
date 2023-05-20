import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password, username } =
      await request.json();

    const req = await fetch(`${BACKEND_URL}/api/auth/local/register`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        username,
      }),
    });

    const res = await req.json();

    if (req.status == 200) {
      return NextResponse.json({
        ...res,
      });
    } else {
      return new NextResponse(
        JSON.stringify({
          ...res,
        }),
        {
          status: res.error.status,
        }
      );
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        error: {
          status: 500,
          message: `Strapi backend error`,
        },
      }),
      {
        status: 500,
      }
    );
  }
}
