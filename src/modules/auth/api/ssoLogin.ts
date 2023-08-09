import axios from "axios";

const ssoLogin = async (data: any) =>
  axios({
    data,
    method: "POST",
    url: "ssoLogin",
    baseURL: "http://localhost:5000/",
  });
export { ssoLogin };
