import axios from "axios";
import { UserClubRole } from "../../users/types/userTypes";

export const getUserClubRole = async (clubId: string): Promise<Array<UserClubRole>> => {
  const response = await axios({
    method: "GET",
    url: `club/findAll/${clubId}`,
  });

  return response.data;
};
