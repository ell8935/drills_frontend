import axios from "axios";

const emailInDb = async (email: string): Promise<{ data: { message: string; statusCode: number } }> =>
  axios({
    data: { email },
    method: "POST",
    url: "auth/checkEmail",
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export { emailInDb };
