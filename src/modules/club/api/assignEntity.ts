import axios from "axios";
import { AssignUserInput } from "../../users/types/userTypes";

export const assignEntity = async (form: AssignUserInput) =>
  axios({
    data: form,
    method: "POST",
    url: "users/associate",
  });
