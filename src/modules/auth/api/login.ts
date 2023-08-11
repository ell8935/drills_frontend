import axios from "axios";

const login = async ({ email, password }: { email: string; password: string }) =>
  axios({
    data: { email, password },
    method: "POST",
    url: "auth/login",
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export { login };
