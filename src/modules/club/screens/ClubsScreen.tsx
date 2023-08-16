import { useEffect, useState } from "react";
import { getClubs } from "../api/getClubs";
import { Club } from "../types/club.types";
import ClubCard from "../components/ClubCard/ClubCard";
import { Button } from "@mui/material";
import { getClubsBySport } from "../api/getClubsBySport";
import { toast } from "react-toastify";

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

  const handleOnClick = async () => {
    // const data = await getClubsBySport("Volleyball");
    // console.log(data);
  };

  return (
    <div>
      <Button onClick={handleOnClick}>Volleyball </Button>
      {clubs.map((club: Club) => (
        <ClubCard key={club.clubId} club={club} />
      ))}
    </div>
  );
};

export default ClubsScreen;
