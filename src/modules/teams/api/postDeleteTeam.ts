import axios from "axios";

export const postDeleteTeam = async ({ teamId }: { teamId: string }) =>
  axios({
    data: { teamId },
    method: "POST",
    url: "team/deleteTeam",
  });
