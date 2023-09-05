import axios from "axios";

export const getAllTeamsByClubId = async (clubId: string) =>
  axios({ method: "GET", url: `teams/allByClubId/${clubId}` });
