import { ApiResponse, AuthUser } from "@/types/api";

type LoginProps = {
  email: string;
  password: string;
};

export async function loginUser(
  data: LoginProps
): Promise<ApiResponse<AuthUser | null>> {
  const response = {
    error: null,
    payload: null,
  };

  const req = await fetch(`/api/register`, {
    method: `POST`,
    body: JSON.stringify({ ...data }),
  });

  const res = await req.json();

  if (req.status == 200) {
    return {
      ...response,
      payload: res,
    };
  } else {
    return {
      ...response,
      error: {
        status: res.error.status,
        message: res.error.message,
      },
    };
  }
}
