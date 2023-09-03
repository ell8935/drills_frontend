import * as yup from "yup";

export const assignPlayerValidation: any = yup.object().shape({
  fullName: yup.string().required("Required"),
  age: yup.string().required("Required"),
});
