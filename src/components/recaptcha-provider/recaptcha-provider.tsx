"use client";

import { ReCaptchaProvider as NextReCaptcha } from "next-recaptcha-v3";
import { ReactNode } from "react";

export default function ReCaptchaProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <NextReCaptcha>{children}</NextReCaptcha>;
}
