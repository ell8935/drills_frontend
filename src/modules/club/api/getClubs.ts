import axios from "axios";

export const getClubs = async () =>
  axios({
    method: "GET",
    url: "club/clubs",
  });
