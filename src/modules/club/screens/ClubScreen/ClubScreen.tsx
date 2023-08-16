import { useClub } from "../../hooks/useClub";
import { useNavigate, useParams } from "react-router-dom";
import ClubCard from "../../components/ClubCard/ClubCard";
import NotFound404 from "../../../auth/screens/NotFound404/NotFound404";

const ClubScreen = () => {
  const { id } = useParams();
  const { data, error, loading } = useClub(id!);
  const navigate = useNavigate();

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
    </div>
  );
};

export default ClubScreen;
