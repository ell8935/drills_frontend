import axios from "axios";

const forgotPassword = async (email: string) =>
  axios({
    data: { email },
    method: "POST",
    url: "forgotPassword",
    baseURL: "http://localhost:5000/",
  });

const AuthResetPassword = async (email: string, token: string) =>
  axios({
    data: { email, token },
    method: "POST",
    url: "AuthResetPassword",
    baseURL: "http://localhost:5000/",
  });

const resetPassword = async ({
  email,
  password,
  token,
}: {
  email: string;
  password: string;
  token: string;
}) =>
  axios({
    data: { email, password, token },
    method: "POST",
    url: "resetPassword",
    baseURL: "http://localhost:5000/",
  });

export { forgotPassword, AuthResetPassword, resetPassword };
