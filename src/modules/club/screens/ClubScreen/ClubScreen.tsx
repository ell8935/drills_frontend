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
  const { data: dataClub, isLoading, isError, refetch: refetchClub } = useQuery("getClub", () => getClub(id!));
  const { data: dataUserClubRole, refetch: refetchUserClubRole } = useQuery("getUserClubRole", () => getUserClubRole());
  const [isAssignUserModalOpen, setIsAssignUserModalOpen] = useState<boolean>(false);

  const [entireData, setEntireData] = useState<UserClubRoleRowsData>({
    managers: [],
    trainers: [],
    players: [],
    teams: [],
  });

  useEffect(() => {
    setClubId(id!);
    if (dataUserClubRole) {
      const managers = dataUserClubRole.filter((item) => item.roleName === "manager");
      const trainers = dataUserClubRole.filter((item) => item.roleName === "trainer");
      const players = dataUserClubRole.filter((item) => item.roleName === "player");
      const teams = dataClub?.teams;

      setEntireData({ managers, players, trainers, teams: teams || [] });
    }
  }, [dataUserClubRole, id, dataClub]);

  const handleToggleAssignUserModal = () => {
    setIsAssignUserModalOpen(!isAssignUserModalOpen);
  };

  const handleRerender = async () => {
    await refetchUserClubRole();
    await refetchClub();
  };

  if (isError) return "Error";

  return (
    <div>
      <AssignUserModal
        isOpen={isAssignUserModalOpen}
        closeModal={handleToggleAssignUserModal}
        onAssignUser={handleRerender}
      ></AssignUserModal>
      {isLoading ? "Loading" : <ClubCard club={dataClub!} editable isInside />}
      <Button onClick={handleToggleAssignUserModal}>Add Entity</Button>
      <ClubTabs entireData={entireData} onChange={handleRerender} />
    </div>
  );
};

export default ClubScreen;
