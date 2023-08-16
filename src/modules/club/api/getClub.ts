import axios from "axios";

export const getClub = async (clubId: string) =>
  axios({
    method: "GET",
    url: "club/",
    params: { id: clubId },
  });
