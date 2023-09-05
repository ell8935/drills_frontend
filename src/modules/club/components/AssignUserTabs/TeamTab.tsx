import { Button } from "@mui/material";
import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { assignPlayerValidation } from "../../../auth/validation/assignPlayerValidation";
import { postCreateTeam } from "../../api/postCreateTeam";
interface TeamTabProps {
  clubId: string;
}
export const TeamTab = ({ clubId }: TeamTabProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { teamName: "" },
    schema: assignPlayerValidation,
  });

  const handleSubmit = () => {
    postCreateTeam({ teamName: form.teamName, clubId });
  };

  return (
    <div>
      <div>
        <CustomTextField
          name="teamName"
          label="Team Name"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          fullWidth
          error={errors.teamName}
        />
      </div>
      <Button onClick={handleSubmit}>Create team</Button>
    </div>
  );
};
