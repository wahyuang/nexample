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
