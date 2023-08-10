import * as yup from "yup";

export const emailValidation: any = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
});
