import { useNavigate, useParams } from "react-router-dom";
import NotFound404 from "../../../auth/screens/NotFound404/NotFound404";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import mockOrganizationalData from "../../../../shared/mockData/mockData";
import { useUserRolesInClub } from "../../hooks/useUserClubRoles";

const ClubScreen = () => {
  const { id } = useParams();
  const { loading, error, data } = useUserRolesInClub({ clubId: id, userId: "8556ed80-5091-48e6-bb23-215da7a9078d" });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/updateClub/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data.userClubRoles) {
    return <NotFound404 />;
  }

  return (
    <div>
      <ClubCard onClick={handleNavigate} club={data.userClubRoles} />
      <ClubTabs data={mockOrganizationalData} />
    </div>
  );
};

export default ClubScreen;
