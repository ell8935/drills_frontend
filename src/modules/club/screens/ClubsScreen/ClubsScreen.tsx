import { useEffect, useState } from "react";
import { getClubs } from "../../api/getClubs";
import { Club } from "../../types/club.types";
import ClubCard from "../../components/ClubCard/ClubCard";
import { useNavigate } from "react-router-dom";

const ClubsScreen = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await getClubs();
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleNavigateToClub = async (clubId: string) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <div>
      {clubs.map((club: Club) => (
        <ClubCard onClick={() => handleNavigateToClub(club.clubId)} key={club.clubId} club={club} />
      ))}
    </div>
  );
};

export default ClubsScreen;
