"use client";

import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Link from "@/components/link";

type DataLoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<DataLoginForm>();

  const onFormSubmit: SubmitHandler<DataLoginForm> = useCallback((data) => {
    console.log(data);
    return null;
  }, []);

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
          className="block w-full h-10 px-4 text-sm text-white border-none rounded-md bg-sky-400"
        >
          Sign in
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
    </form>
  );
}
