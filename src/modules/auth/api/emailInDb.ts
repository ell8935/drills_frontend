import axios from "axios";

const emailInDb = async (email: string) =>
  axios({
    data: { email },
    method: "POST",
    url: "emailInDb",
    baseURL: "http://localhost:5000/",
  });

export { emailInDb };
