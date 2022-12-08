import type { NextApiRequest, NextApiResponse } from "next";
import type { Error } from "@/types/api";
import { jsonToFormData } from "@/utils/common";

type Data = {
  name: string;
};

type APIResponse = {
  data: {} | null;
  error: Error;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) => {
  const result = {
    data: null,
    error: null,
  };

  if (req.method !== `POST`) {
    res.status(401).json({
      ...result,
      error: {
        code: 401,
        message: `Request forbidden. You are not allowed to access this route.`,
      },
    });
  } else {
    const data = JSON.parse(req.body); // data body

    const formData = jsonToFormData(data); // convert into formData

    /**
     * Send the message to wp contact form 7
     */
    const sendMessage = await fetch(
      "http://wp.nexample.local/wp-json/contact-form-7/v1/contact-forms/22/feedback",
      {
        method: "POST",
        body: formData,
      }
    );

    const response = await sendMessage.json();
    // console.log(`hasil: `, await kirim.json());
    res.status(200).json(response);
  }
};
