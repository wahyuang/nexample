"use client";

import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useReCaptcha } from "next-recaptcha-v3";

import { FormResponse } from "@/types/Form";

import { FormErrorMessage } from "@/components/forms/form-error-message";

type ContactFormData = {
  formID: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  token: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const { executeRecaptcha } = useReCaptcha();

  const [formResponse, setFormResponse] = useState<FormResponse>({
    status: `error`,
    message: ``,
  });

  const onFormSubmit: SubmitHandler<ContactFormData> = useCallback(
    async (data) => {
      // assign form ID
      data[`formID`] = `contact-form`;

      // request recaptcha token
      const token = await executeRecaptcha(`contactFormSubmit`);

      // assign token to form data
      if (token) {
        data[`token`] = token;
      }

      // send message
      const req = await fetch(`/api/contact`, {
        method: `POST`,
        body: JSON.stringify(data),
      });

      const res = await req.json();

      /**
       * Handle API response
       */
      if (res.status === `mail_sent`) {
        setFormResponse({
          status: `success`,
          message: `Thank you, your message has been sent.`,
        });
        reset();
      } else {
        setFormResponse({
          status: `error`,
          message: res.error.message,
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
              {...register(`firstName`, {
                required: true,
              })}
            />
            {errors.firstName && (
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
              {...register(`lastName`, {
                required: true,
              })}
            />
            {errors.lastName && (
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
              {...register(`email`, {
                required: `Email address is required`,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: `Invalid email address`,
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage>{`${errors.email.message}`}</FormErrorMessage>
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
              {...register(`subject`, {
                required: true,
              })}
            />
            {errors.subject && (
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
          className="px-8 py-2 text-white rounded-md bg-sky-500 hover:bg-sky-700 disabled:bg-sky-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? `Sending ...` : `Send`}
        </button>
      </div>
    </form>
  );
};
