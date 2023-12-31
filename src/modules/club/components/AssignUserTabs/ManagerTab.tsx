import { Button } from "@mui/material";
import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { assignManagerValidation } from "../../../auth/validation/assignManagerValidation";
import { PlaceholderProps } from "../../types/club.types";

export const ManagerTab = ({ onSubmit }: PlaceholderProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { fullName: "" },
    schema: assignManagerValidation,
  });

  const handleSubmit = () => {
    onSubmit?.({ fullName: form.fullName, roleName: "manager" });
  };

  return (
    <div>
      <div>
        <CustomTextField
          name="fullName"
          label="Full Name"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          fullWidth
          error={errors.fullName}
        />
      </div>
      <Button onClick={handleSubmit}>Create manager</Button>
    </div>
  );
};
