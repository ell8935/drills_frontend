import { useClub } from "../../hooks/useClub";
import { useNavigate, useParams } from "react-router-dom";
import NotFound404 from "../../../auth/screens/NotFound404/NotFound404";
import ClubTree from "../../components/ClubTabs/ClubTabs";
import ClubCard from "../../components/ClubCard/ClubCard";

const ClubScreen = () => {
  const { id } = useParams();
  const { data, error, loading } = useClub(id!);
  const navigate = useNavigate();

  //fetch OrganizationalData with useClub
  //useDispatch to the data to store

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data?.findOneById) {
    return <NotFound404 />;
  }
  const handleNavigate = () => {
    navigate(`/updateClub/${id}`);
  };
  return (
    <div>
      <ClubCard onClick={handleNavigate} club={data.findOneById} />
      <ClubTree />
    </div>
  );
};

export default ClubScreen;
