import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { emailValidation } from "../../../auth/validation/emailValidation";
import { EntityNames } from "../../../users/types/userTypes";

interface TabDataProps {
  isPlaceholder?: string;
  tab: EntityNames;
}

export const TabData = ({ isPlaceholder, tab }: TabDataProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { email: "", password: "" },
    schema: emailValidation,
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div>
      <CustomTextField
        name="email"
        type="email"
        label="Enter your email"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        fullWidth
        error={errors.email}
      />
      <CustomTextField
        name={"password"}
        isPassword
        label={"Password"}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        error={errors.password}
      />
    </div>
  );
};
