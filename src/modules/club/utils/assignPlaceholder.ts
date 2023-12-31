import { getUserId } from "../../../shared/utils/localStorageUtils";
import { CreatePlaceholderProps, RolesNames } from "../../users/types/userTypes";
import { postCreatePlaceholder } from "../api/postCreatePlaceholder";

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
  return await postCreatePlaceholder(userClubRoleData);
};
