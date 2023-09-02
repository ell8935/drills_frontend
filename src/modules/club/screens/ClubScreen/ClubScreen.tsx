import { useParams } from "react-router-dom";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import { getClub } from "../../api/getClub";
import { useQuery } from "react-query";
import { getUserClubRole } from "../../api/getUserClubRole";
import { useEffect, useState } from "react";
import { AssignUserModal } from "../../modals/AssignUserModal";
import { Button } from "@material-ui/core";
import { UserClubRoleRowsData } from "../../types/club.types";
import { setClubId } from "../../../../shared/utils/localStorageUtils";

const ClubScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery("getClub", () => getClub(id!));
  const { data: dataUserClubRole } = useQuery("getUserClubRole", () => getUserClubRole());
  const [isAssignUserModalOpen, setIsAssignUserModalOpen] = useState<boolean>(false);

  const [userClubRoleRows, setUserClubRoleRows] = useState<UserClubRoleRowsData>({
    managers: [],
    trainers: [],
    players: [],
  });

  useEffect(() => {
    setClubId(id!);
    if (dataUserClubRole) {
      const managers = dataUserClubRole.filter((item) => item.roleName === "manager");
      const trainers = dataUserClubRole.filter((item) => item.roleName === "trainer");
      const players = dataUserClubRole.filter((item) => item.roleName === "player");

      setUserClubRoleRows({ managers, players, trainers });
    }
  }, [dataUserClubRole, id]);

  const handleToggleAssignUserModal = () => {
    setIsAssignUserModalOpen(!isAssignUserModalOpen);
  };

  if (isError) return "Error";
  console.log(dataUserClubRole);

  return (
    <div>
      <Button onClick={handleToggleAssignUserModal}>+</Button>
      <AssignUserModal isOpen={isAssignUserModalOpen} closeModal={handleToggleAssignUserModal}></AssignUserModal>
      {isLoading ? "Loading" : <ClubCard club={data!} />}
      <ClubTabs userClubRoleRows={userClubRoleRows} />
    </div>
  );
};

export default ClubScreen;
