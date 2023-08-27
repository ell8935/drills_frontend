import { useNavigate, useParams } from "react-router-dom";
import NotFound404 from "../../../auth/screens/NotFound404/NotFound404";
import ClubTabs from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";
import mockOrganizationalData from "../../../../shared/mockData/mockData";

const ClubScreen = () => {
  const { id } = useParams();
  // const { loading, error, data } = useUserRolesInClub({ clubId: id, userId: "8556ed80-5091-48e6-bb23-215da7a9078d" });
  const navigate = useNavigate();
  // const { associateUserWithClubAndRole, loading: mutationLoading } = useAssignUserToClub({
  //   userId: "8556ed80-5091-48e6-bb23-215da7a9078d", // The user's ID
  //   clubId: id ? id : "", // Club ID from useParams
  //   roleName: "1", // Role ID you want to assign
  // });

  const handleNavigate = () => {
    navigate(`/updateClub/${id}`);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // if (!data.userClubRoles) {
  //   return <NotFound404 />;
  // }
  const data = {
    userClubRoles: {
      clubId: "12345",
      clubName: "Example Club",
      sport: "Football",
      league: "Premier League",
      city: "Cityville",
      country: "Countryland",
      logo: "logo.png",
      description: "A sports club description.",
      foundedAt: "123",
      website: "https://exampleclub.com",
      email: "contact@exampleclub.com",
      phoneNumber: "123-456-7890",
    },
  };
  return (
    <div>
      <ClubCard onClick={handleNavigate} club={data.userClubRoles} />
      <ClubTabs data={mockOrganizationalData} />
      {/* <Button onClick={handleAssignUser} disabled={mutationLoading}>
        assign user to club
      </Button> */}
    </div>
  );
};

export default ClubScreen;
