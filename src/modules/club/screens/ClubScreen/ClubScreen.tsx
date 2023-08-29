import { useNavigate, useParams } from "react-router-dom";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import { getClub } from "../../api/getClub";
import { useQuery } from "react-query";
import { Button } from "@mui/material";
import { assignEntity } from "../../api/assignEntity";
import { getUserClubRole } from "../../api/getUserClubRole";
import { getUserId } from "../../../../shared/utils/localStorageUtils";
import { AssignUserProps } from "../../../users/types/userTypes";

const ClubScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery("getClub", () => getClub(id!));

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/updateClub/${id}`);
  };

  const handleAssignUser = async () => {
    const userId = getUserId();
    console.log(userId);

    const userClubRoleData: AssignUserProps = {
      userId: userId || "", // The user's ID
      clubId: id || "", // Club ID from useParams
      roleId: 11, // Role ID you want to assign
    };
    await assignEntity(userClubRoleData);
    console.log("User Assigned");
  };

  const handleGetUserClubRole = async () => {
    const data = await getUserClubRole();
    console.log(data);
  };

  if (isError) return "Error";

  return (
    <div>
      {isLoading ? "Loading" : <ClubCard onClick={handleNavigate} club={data!} />}

      <ClubTabs />
      <Button onClick={handleAssignUser}>assign user to club</Button>
      <Button onClick={handleGetUserClubRole}>handleGetUserClubRole</Button>
    </div>
  );
};

export default ClubScreen;
