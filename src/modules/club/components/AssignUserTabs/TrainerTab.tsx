import { Button } from "@mui/material";
import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { PlaceholderProps } from "../../types/club.types";
import { assignTrainerValidation } from "../../../auth/validation/assignTrainerValidation";

export const TrainerTab = ({ onSubmit }: PlaceholderProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { fullName: "" },
    schema: assignTrainerValidation,
  });

  const handleSubmit = () => {
    onSubmit?.({ fullName: form.fullName, roleName: "trainer" });
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
      <Button onClick={handleSubmit}>Create trainer</Button>
    </div>
  );
};
