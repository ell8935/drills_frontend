import { useEffect, useState } from "react";
import { getClubs } from "../../api/getClubs";
import { Club } from "../../types/club.types";
import ClubCard from "../../components/ClubCard/ClubCard";

const ClubsScreen = () => {
  const [clubs, setClubs] = useState<Club[]>([]);

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

  return (
    <div>
      {clubs.map((club: Club) => (
        <ClubCard key={club.clubId} club={club} />
      ))}
    </div>
  );
};

export default ClubsScreen;
