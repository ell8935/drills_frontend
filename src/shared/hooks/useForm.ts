import * as yup from "yup";
import { useState, ChangeEvent } from "react";

interface Props<T> {
  initialState?: T;
  schema?: yup.AnyObjectSchema;
}

interface FormErrors {
  [key: string]: string;
}

const useForm = <T>({ schema, initialState = {} as T }: Props<T>) => {
  const [form, setForm] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const isFormValid = async (): Promise<boolean> => {
    try {
      await schema?.validate(form, { abortEarly: false, context: form });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const tempErrors: FormErrors = {};
        err.inner.forEach(({ message, path }) => (tempErrors[path!] = message));

        setErrors(tempErrors);
      }
      return false;
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;
    const newValue = type === "number" ? parseInt(value) : value;

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleOnBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    if (!schema) return;
    const { value, name } = event.target;

    try {
      const tempErrorObj = { ...errors };
      delete tempErrorObj[name];

      const field = yup.reach(schema, name) as any;
      field.validateSync(value);
      setErrors(tempErrorObj);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationError = err as yup.ValidationError; // Type assertion
        setErrors((prev) => ({ ...prev, [name]: validationError.errors[0] }));
      }
    }
  };

  return { form, setForm, handleOnChange, handleOnBlur, errors, isFormValid };
};

export default useForm;
