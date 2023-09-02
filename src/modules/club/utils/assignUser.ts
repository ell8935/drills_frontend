import { getUserId } from "../../../shared/utils/localStorageUtils";
import { AssignUserInput, RolesNames } from "../../users/types/userTypes";
import { postAssignEntity } from "../api/postAssignEntity";

interface AssignUserProps {
  clubId: string;
  roleName: RolesNames;
}

export const handleAssignUser = async ({ clubId, roleName }: AssignUserProps) => {
  const userId = getUserId();
  const userClubRoleData: AssignUserInput = {
    userId: userId || "",
    clubId: clubId,
    roleName: roleName, // Role name you want to assign
  };
  const data = await postAssignEntity(userClubRoleData);
  console.log("User Assigned");
  return data;
};
