import * as yup from "yup";

export const assignTrainerValidation: any = yup.object().shape({
  fullName: yup.string().required("Required"),
  age: yup.string().required("Required"),
});
