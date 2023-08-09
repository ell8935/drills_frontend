import axios from "axios";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  axios({
    data: { email, password },
    method: "POST",
    url: "authUser",
    baseURL: "http://localhost:5000/",
  });

export { login };
