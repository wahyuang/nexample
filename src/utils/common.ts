import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

var FormData = require("form-data");

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
