import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function POST(request: Request) {
  try {
    const {
      formID,
      firstName,
      lastName,
      email,
      subject,
      message,
      token: ReCatpchaToken,
    } = await request.json();

    const sendMessage = await fetch(`${BACKEND_URL}/api/ezforms/send`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        token: ReCatpchaToken,
        formName: formID,
        formData: {
          Name: `${firstName} ${lastName}`,
          Email: email,
          Subject: subject,
          Message: message,
        },
      }),
    });

    const res = await sendMessage.json();
    if (sendMessage.status == 200) {
      return NextResponse.json({
        status: `mail_sent`,
        data: {
          ...res,
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({
          status: `mail_error`,
          ...res,
        }),
        {
          status: 500,
        }
      );
    }
    // console.log("oke dicoba dulu");
    // if( sendMessage.status)
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
