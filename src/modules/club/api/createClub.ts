import axios from "axios";
import { CreateClubProps } from "../types/club.types";

export const createClub = async (form: CreateClubProps) =>
  axios({
    data: form,
    method: "POST",
    url: "club/create",
  });
