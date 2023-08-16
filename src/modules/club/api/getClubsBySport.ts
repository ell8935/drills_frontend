import axios from "axios";

export const getClubsBySport = async (sport: string) =>
  axios({
    method: "GET",
    url: `club/${sport}`,
  });
