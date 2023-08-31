import { getUserId } from "../../../shared/utils/localStorageUtils";
import { AssignPlaceholderProps } from "../../users/types/userTypes";
import { assignEntity } from "../api/assignEntity";

export const handleAssignPlaceHolder = async (id: string) => {
  const userId = getUserId();
  const userClubRoleData: AssignPlaceholderProps = {
    fullName: "dasd",
    userId: userId || "",
    clubId: id || "",
    roleName: "manager", // Role ID you want to assign
  };
  await assignEntity(userClubRoleData);
  console.log("User Assigned");
};
