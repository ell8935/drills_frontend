import axios from "axios";
import { CreatePlaceholderProps } from "../../users/types/userTypes";

export const postCreatePlaceholder = async (form: CreatePlaceholderProps) =>
  axios({
    data: form,
    method: "POST",
    url: "club/createPlaceholder",
  });
