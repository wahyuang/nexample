"use client";

import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { registerUser } from "@/libs/register-user";
import { FormErrorMessage } from "./form-error-message";
import Link from "@/components/link";

type DataRegisterForm = {
  firtsName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterSuccess = () => {
  return (
    <div>
      <div className="px-4 py-4 text-center text-green-700 bg-white rounded-md">
        You have registered sucessfully
      </div>
      <div className="text-center">
        <Link
          href={`/login`}
          className="items-center inline-block px-6 py-3 leading-tight text-white rounded-md bg-sky-400"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default function RegisterForm() {
  const [formResponse, setFormResponse] = useState({
    status: `error`,
    message: ``,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting, errors },
    reset,
  } = useForm<DataRegisterForm>();

  const onFormSubmit: SubmitHandler<DataRegisterForm> = useCallback(
    async (data) => {
      setFormResponse({
        status: ``,
        message: ``,
      });

      const { error } = await registerUser({
        firstName: data.firtsName,
        lastName: data.lastName,
        username: data.email,
        email: data.email,
        password: data.password,
      });

      if (!error) {
        setFormResponse({
          status: `success`,
          message: ``,
        });

        reset();
      } else {
        setFormResponse({
          status: `error`,
          message: error.message,
        });
      }

      return null;
    },
    [reset]
  );

  if (isSubmitSuccessful && formResponse.status == `success`)
    return <RegisterSuccess />;

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
            {errors.firtsName && (
              <FormErrorMessage>
                {`${errors.firtsName.message}`}
              </FormErrorMessage>
            )}
          </div>
          <div className="w-1/2 px-2.5">
            <label className="block mb-2 text-sm font-bold text-sky-400">
              Last name :
            </label>
            <input
              type="text"
              {...register(`lastName`, { required: `last name is required` })}
            />
            {errors.lastName && (
              <FormErrorMessage>
                {`${errors.lastName.message}`}
              </FormErrorMessage>
            )}
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
        {errors.email && (
          <FormErrorMessage>{`${errors.email.message}`}</FormErrorMessage>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-sky-400">
          Password :
        </label>
        <input
          type="password"
          {...register(`password`, {
            required: `Password is required`,
            minLength: {
              value: 8,
              message: `Password must be at least 8 characters`,
            },
          })}
        />
        {errors.password && (
          <FormErrorMessage>{`${errors.password.message}`}</FormErrorMessage>
        )}
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="block w-full h-10 px-4 text-sm text-white border-none rounded-md bg-sky-400 disabled:bg-sky-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? `Creating account ...` : `Create account`}
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
      {isSubmitSuccessful && formResponse.status == `error` && (
        <div className="px-4 py-2 text-sm text-white bg-red-400 rounded-md">
          {formResponse.message}
        </div>
      )}
    </form>
  );
}
