import { Button } from "@mui/material";
import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { PlaceholderProps } from "../../types/club.types";
import { assignPlayerValidation } from "../../../auth/validation/assignPlayerValidation";

export const PlayerTab = ({ onSubmit }: PlaceholderProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { fullName: "" },
    schema: assignPlayerValidation,
  });

  const handleSubmit = () => {
    onSubmit?.({ fullName: form.fullName, roleName: "player" });
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
      <Button onClick={handleSubmit}>Create player</Button>
    </div>
  );
};
