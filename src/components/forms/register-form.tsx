"use client";

import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Link from "@/components/link";

type DataRegisterForm = {
  firtsName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<DataRegisterForm>();

  const onFormSubmit: SubmitHandler<DataRegisterForm> = useCallback(
    async (data) => {
      console.log(data);
      return null;
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-4">
        <div className="flex flex-wrap -mx-2.5">
          <div className="w-1/2 px-2.5">
            <label className="block mb-2 text-sm font-bold text-sky-400">
              First name :
            </label>
            <input
              type="text"
              {...register(`firtsName`, { required: `First name is required` })}
            />
          </div>
          <div className="w-1/2 px-2.5">
            <label className="block mb-2 text-sm font-bold text-sky-400">
              Last name :
            </label>
            <input
              type="text"
              {...register(`lastName`, { required: `last name is required` })}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-sky-400">
          Email address :
        </label>
        <input
          type="text"
          {...register(`email`, { required: `Email is required` })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-sky-400">
          Password :
        </label>
        <input
          type="password"
          {...register(`password`, { required: `Password is required` })}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="block w-full h-10 px-4 text-sm text-white border-none rounded-md bg-sky-400"
        >
          Create account
        </button>
      </div>
      <div className="text-center">
        <p>
          I already have an account.{` `}
          <Link href={`/login`} className="text-sky-500 hover:underline">
            Sign in.
          </Link>
        </p>
      </div>
    </form>
  );
}
