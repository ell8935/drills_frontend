import axios from "axios";

export const postCreateTeam = async (form: any) => axios({ data: form, method: "POST", url: "team/create" });
