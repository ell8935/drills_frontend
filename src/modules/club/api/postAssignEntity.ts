import axios from "axios";
import { AssignUserInput } from "../../users/types/userTypes";

export const postAssignEntity = async (form: AssignUserInput) =>
  axios({
    data: form,
    method: "POST",
    url: "club/associate",
  });
