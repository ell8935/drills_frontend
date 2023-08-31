import { useParams } from "react-router-dom";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import { getClub } from "../../api/getClub";
import { useQuery } from "react-query";
import { getUserClubRole } from "../../api/getUserClubRole";
import { UserClubRole } from "../../../users/types/userTypes";
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
      const managersData = dataUserClubRole.filter((item) => item.roleName === "manager");
      const trainersData = dataUserClubRole.filter((item) => item.roleName === "trainer");
      const playersData = dataUserClubRole.filter((item) => item.roleName === "player");

      setManagers(managersData);
      setTrainers(trainersData);
      setPlayers(playersData);
    }
  }, [dataUserClubRole]);

  if (isError) return "Error";
  console.log(dataUserClubRole);

  return (
    <div>
      {isLoading ? "Loading" : <ClubCard club={data!} />}
      <ClubTabs managers={managers} trainers={trainers} players={players} clubId={id!} />
    </div>
  );
};

export default ClubScreen;
