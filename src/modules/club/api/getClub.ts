import axios from "axios";
import { Club } from "../types/club.types";

export const getClub = async (clubId: string): Promise<Club> => {
  const response = await axios({
    method: "GET",
    url: `club/${clubId}`,
  });

  return response.data; // Return the raw response data
};
