import { Button } from "@mui/material";
import CustomTextField from "../../../../shared/components/CustomTextField";
import useForm from "../../../../shared/hooks/useForm";
import { assignManagerValidation } from "../../../auth/validation/assignManagerValidation";
import { handleAssignUser } from "../../utils/assignUser";
import { useEffect, useState } from "react";
import { getClubId } from "../../../../shared/utils/localStorageUtils";
import { handleCreatePlaceHolder } from "../../utils/assignPlaceholder";

interface TabDataProps {
  isPlaceholder?: string;
}

export const ManagerTab = ({ isPlaceholder }: TabDataProps) => {
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { fullName: "", age: "" },
    schema: assignManagerValidation,
  });
  const [clubId, setClubId] = useState<string | null>();

  useEffect(() => {
    setClubId(getClubId());
  }, []);

  const handleSubmit = () => {
    if (isPlaceholder === "placeholder" && clubId) {
      handleCreatePlaceHolder({ clubId: clubId, fullName: form.fullName, roleName: "manager" });
    }
    if (isPlaceholder === "assign" && clubId) handleAssignUser({ clubId, roleName: "manager" });
    console.log(form);
  };

  return (
    <div>
      {isPlaceholder === "placeholder" && (
        <div>
          <CustomTextField
            name="fullName"
            label="Full Name"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            fullWidth
            error={errors.fullName}
          />
          <CustomTextField
            name={"age"}
            label={"Age"}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            error={errors.age}
          />
        </div>
      )}
      <Button onClick={handleSubmit}>Create placeholder</Button>
    </div>
  );
};
