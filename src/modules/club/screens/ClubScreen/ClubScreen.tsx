import { useParams } from "react-router-dom";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import { getClub } from "../../api/getClub";
import { useQuery } from "react-query";
import { Button } from "@mui/material";
import { assignEntity } from "../../api/assignEntity";
import { getUserClubRole } from "../../api/getUserClubRole";
import { getUserId } from "../../../../shared/utils/localStorageUtils";
import { AssignUserProps, UserClubRole } from "../../../users/types/userTypes";
import { useEffect, useState } from "react";

const ClubScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery("getClub", () => getClub(id!));
  const { data: dataUserClubRole } = useQuery("getUserClubRole", () => getUserClubRole());

  const [managers, setManagers] = useState<UserClubRole[]>([]);
  const [trainers, setTrainers] = useState<UserClubRole[]>([]);
  const [players, setPlayers] = useState<UserClubRole[]>([]);

  useEffect(() => {
    if (dataUserClubRole) {
      const managersData = dataUserClubRole.filter((item) => item.roleId === 11);
      const trainersData = dataUserClubRole.filter((item) => item.roleId === 22);
      const playersData = dataUserClubRole.filter((item) => item.roleId === 33);

      setManagers(managersData);
      setTrainers(trainersData);
      setPlayers(playersData);
    }
  }, [dataUserClubRole]);

  const handleAssignUser = async () => {
    const userId = getUserId();
    const userClubRoleData: AssignUserProps = {
      userId: userId || "", // The user's ID
      clubId: id || "", // Club ID from useParams
      roleId: 11, // Role ID you want to assign
    };
    await assignEntity(userClubRoleData);
    console.log("User Assigned");
  };

  if (isError) return "Error";

  return (
    <div>
      {isLoading ? "Loading" : <ClubCard club={data!} />}
      <ClubTabs managers={managers} trainers={trainers} players={players} />
      <Button onClick={handleAssignUser}>assign user to club</Button>
    </div>
  );
};

export default ClubScreen;
