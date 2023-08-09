import axios from "axios";

const register = async (form: any) =>
  axios({
    data: form,
    method: "POST",
    url: "register",
    baseURL: "http://localhost:5000/",
  });

export { register };
