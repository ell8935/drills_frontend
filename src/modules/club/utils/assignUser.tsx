import { getUserId } from "../../../shared/utils/localStorageUtils";
import { AssignUserInput, RolesNames } from "../../users/types/userTypes";
import { assignEntity } from "../api/assignEntity";
interface AssignUserProps {
  clubId: string;
  tab: RolesNames;
}
export const handleAssignUser = async ({ clubId, tab }: AssignUserProps) => {
  const userId = getUserId();
  const userClubRoleData: AssignUserInput = {
    userId: userId || "",
    clubId: clubId || "",
    roleName: tab, // Role ID you want to assign
  };
  const data = await assignEntity(userClubRoleData);
  console.log("User Assigned");
  console.log(data);
};
