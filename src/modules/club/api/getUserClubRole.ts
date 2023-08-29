import axios from "axios";
import { UserClubRole } from "../../users/types/userTypes";

export const getUserClubRole = async (): Promise<Array<UserClubRole>> => {
  const response = await axios({
    method: "GET",
    url: `users/findAll`,
  });

  return response.data;
};
