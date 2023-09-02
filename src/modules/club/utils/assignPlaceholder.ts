import { getUserId } from "../../../shared/utils/localStorageUtils";
import { AssignPlaceholderProps as CreatePlaceholderProps, RolesNames } from "../../users/types/userTypes";
import { postAssignEntity } from "../api/postAssignEntity";

interface handleCreatePlaceHolderProps {
  clubId: string;
  fullName: string;
  roleName: RolesNames;
}

export const handleCreatePlaceHolder = async ({ clubId, fullName, roleName }: handleCreatePlaceHolderProps) => {
  const userId = getUserId();
  const userClubRoleData: CreatePlaceholderProps = {
    fullName: fullName,
    userId: userId || "",
    clubId: clubId,
    roleName: roleName, // Role name you want to assign
  };
  await postAssignEntity(userClubRoleData);
  console.log("Placeholder Created");
};
