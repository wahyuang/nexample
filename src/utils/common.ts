import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const FormData = require(`form-data`);

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || ``;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || ``;

export function jsonToFormData(data: Record<string, string>) {
  const formData = new FormData();
  if (typeof data === `object`) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  }
  return formData;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLink(link = ``) {
  if (link == ``) return ``;

  const isInternal = link.includes(BACKEND_URL) || link.includes(SITE_URL);

  link = isInternal
    ? link.replace(BACKEND_URL, ``).replace(SITE_URL, ``)
    : link;

  return link;
}
