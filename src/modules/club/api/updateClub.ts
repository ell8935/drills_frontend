import axios from "axios";
import { Club } from "../types/club.types";

export const updateClub = async (form: Club) =>
  axios({
    data: form,
    method: "POST",
    url: "club/update",
  });
