import axios from "axios";

interface RegisterProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const register = async (form: RegisterProps): Promise<{ data: { user: RegisterProps; message: string } }> =>
  axios({
    data: form,
    method: "POST",
    url: "auth/register",
  });

export { register };
