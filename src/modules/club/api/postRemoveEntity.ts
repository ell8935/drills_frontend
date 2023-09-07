import axios from "axios";

export const postRemoveUserClubRole = async ({ id }: { id: string }) =>
  axios({
    data: { id },
    method: "POST",
    url: "club/removeUserClubRole",
  });
