import axios from "axios";

interface RegisterProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const register = async (form: RegisterProps): Promise<void> =>
  axios({
    data: form,
    method: "POST",
    url: "auth/register",
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export { register };
