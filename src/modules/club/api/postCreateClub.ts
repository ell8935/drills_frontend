import axios from "axios";
import { CreateClubProps } from "../types/club.types";

export const postCreateClub = async (form: CreateClubProps) =>
  axios({
    data: form,
    method: "POST",
    url: "club/create",
  });
