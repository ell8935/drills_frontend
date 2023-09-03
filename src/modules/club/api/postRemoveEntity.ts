import axios from "axios";

export const postRemoveEntity = async ({ id }: { id: string }) =>
  axios({
    data: { id },
    method: "POST",
    url: "club/removeEntity",
  });
