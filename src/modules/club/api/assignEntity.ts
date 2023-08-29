import axios from "axios";
import { AssignUserProps } from "../../users/types/userTypes";

export const assignEntity = async (form: AssignUserProps) =>
  axios({
    data: form,
    method: "POST",
    url: "users/associate",
  });
