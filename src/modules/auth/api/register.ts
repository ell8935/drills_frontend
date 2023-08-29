import axios from "axios";
import { User } from "../../users/types/userTypes";

interface RegisterProps {
  email: string;
  password: string;
  fullName: string;
}

const register = async (form: RegisterProps): Promise<{ data: { user: User; message: string } }> =>
  axios({
    data: form,
    method: "POST",
    url: "auth/register",
  });

export { register };
