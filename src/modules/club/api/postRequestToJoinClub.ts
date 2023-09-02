import axios from "axios";
import { RequestToJoinInput } from "../types/club.types";

export const postRequestToJoinClub = async (form: RequestToJoinInput) =>
  axios({ data: form, method: "POST", url: "club/requestToJoinClub" });
