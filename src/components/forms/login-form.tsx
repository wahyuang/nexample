"use client";

import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Link from "@/components/link";

type DataLoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();

  const [formFeedback, setFormFeedback] = useState({
    status: ``,
    message: ``,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<DataLoginForm>();

  const onFormSubmit: SubmitHandler<DataLoginForm> = useCallback(
    async (data) => {
      setFormFeedback({
        status: ``,
        message: ``,
      });

      const req = await signIn(`credentials`, {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: `/dashboard`,
      });

      if (req && req.error) {
        setFormFeedback({
          status: `error`,
          message: req.error,
        });
      }

      if (req && !req.error) {
        router.push(`/dashboard`);
      }

      return null;
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-sky-400">
          Email :
        </label>
        <input
          type="text"
          {...register(`email`, { required: `Please insert your email.` })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-sky-400">
          Password :
        </label>
        <input
          type="password"
          {...register(`password`, {
            required: `Please insert your password.`,
          })}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className={`block w-full h-10 px-4 text-sm text-white border-none rounded-md bg-sky-400 disabled:bg-sky-300`}
          disabled={isSubmitting}
        >
          {isSubmitting ? `Sign In ...` : `Sign In`}
        </button>
      </div>
      <div className="text-center">
        <p>
          Don&apos;t have account?{` `}
          <Link href={`/register`} className="text-sky-500 hover:underline">
            Create an account.
          </Link>
        </p>
      </div>
      {formFeedback && formFeedback.status == `error` && (
        <div className="px-4 py-2 text-sm text-white bg-red-400 rounded-md">
          {formFeedback.message}
        </div>
      )}
    </form>
  );
}
