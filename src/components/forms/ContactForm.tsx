"use client";

import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useReCaptcha } from "next-recaptcha-v3";
import { ContactFormFields, FormResponse } from "@/types/Form";
import { FormErrorMessage } from "@/components/forms/FormErrorMessage";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<ContactFormFields>();

  const { executeRecaptcha } = useReCaptcha();

  const [formResponse, setFormResponse] = useState<FormResponse>({
    status: "error",
    message: "",
  });

  const onFormSubmit: SubmitHandler<ContactFormFields> = useCallback(
    async (data) => {
      // request recaptcha token
      const token = await executeRecaptcha("contactFormSubmit");

      // assign token to form data
      if (token) {
        data["token"] = token;
        data["_wpcf7_recaptcha_response"] = token;
        data["wpcf7_recaptcha_response"] = token;
        data["recaptcha_response"] = token;
        data["response"] = token;
      }

      //send message
      const req = await fetch(`/api/contact/send`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const res = await req.json();

      /**
       * Handle API response
       */
      if (res.status === "mail_sent") {
        setFormResponse({
          status: "success",
          message: res.message,
        });
        reset();
      } else {
        setFormResponse({
          status: "error",
          message: res.message,
        });
      }
    },
    [executeRecaptcha, reset]
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2">
          <div className="mb-5">
            <input
              type="text"
              id=""
              placeholder="First Name"
              {...register(`f_name`, {
                required: true,
              })}
            />
            {errors.f_name && (
              <FormErrorMessage>First name is required</FormErrorMessage>
            )}
          </div>
        </div>
        <div className="w-1/2 px-2">
          <div className="mb-5">
            <input
              type="text"
              id=""
              placeholder="Last Name"
              {...register(`l_name`, {
                required: true,
              })}
            />
            {errors.l_name && (
              <FormErrorMessage>Last name is required</FormErrorMessage>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <div className="mb-5">
            <input
              type="email"
              id=""
              placeholder="Email"
              {...register(`p_email`, {
                required: true,
              })}
            />
            {errors.p_email && (
              <FormErrorMessage>Email address is required</FormErrorMessage>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <div className="mb-5">
            <input
              type="text"
              id=""
              placeholder="Subject"
              {...register(`e_subject`, {
                required: true,
              })}
            />
            {errors.e_subject && (
              <FormErrorMessage>Email subject is required</FormErrorMessage>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <div className="mb-5">
            <textarea
              rows={6}
              placeholder="Message"
              {...register(`message`)}
            ></textarea>
          </div>
        </div>
      </div>
      {isSubmitSuccessful && (
        <div
          className={`px-4 py-2 my-4 text-sm text-white rounded ${
            formResponse.status == `error` ? `bg-red-400` : `bg-green-400`
          }`}
        >
          {formResponse.message}
        </div>
      )}
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-2 text-white rounded-md bg-sky-500 hover:bg-sky-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? `Sending ...` : `Send`}
        </button>
      </div>
    </form>
  );
};
