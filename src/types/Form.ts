export interface RecaptchaToken {
  token: string;
  _wpcf7_recaptcha_response: string;
  wpcf7_recaptcha_response: string;
  recaptcha_response: string;
  response: string;
}

export interface ContactFormFields extends RecaptchaToken {
  f_name: string;
  l_name: string;
  p_email: string;
  e_subject: string;
  message: string;
  token: string;
}

export interface FormResponse {
  status: "success" | "error";
  message: string;
}
