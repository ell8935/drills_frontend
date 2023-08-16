import axios from "axios";
import { useState } from "react";
import { Button, Divider, Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/login";
import LoginFormStyled from "../styles/LoginFormStyled";
import useForm from "../../../shared/hooks/useForm";
import CustomTextField from "../../../shared/components/CustomTextField";
import { GoogleLogin } from "@react-oauth/google";
import { emailValidation } from "../validation/emailValidation";
import { setToken } from "../../../shared/utils/localStorageUtils";

const LoginForm = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { email: "", password: "" },
    schema: emailValidation,
  });

  const handleSuccess = async (tokenResponse: any) => {
    navigate("/club");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await login({ email: form.email, password: form.password });

      if (data.access_token) {
        setToken(data.access_token);
        axios.defaults.headers["Authorization"] = data.access_token;
        navigate("/club");
      }
    } catch (err: any) {
      setStatus(err.response.data.message);
    }
  };

  return (
    <LoginFormStyled>
      <Typography variant="h3" noWrap>
        GREAT TO HAVE YOU HERE!
      </Typography>
      <Typography variant="h6">You can login to access your account</Typography>
      <form>
        <GoogleLogin
          type="icon"
          ux_mode="popup"
          onSuccess={(credentialResponse) => {
            handleSuccess(credentialResponse);
          }}
          onError={() => {
            handleLoginError();
          }}
          useOneTap
        />

        <div>
          <Divider>OR</Divider>
        </div>
        <CustomTextField
          name="email"
          type="email"
          label="Enter your email"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          fullWidth
          error={errors.email}
        />
        <CustomTextField
          name={"password"}
          isPassword
          label={"Password"}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          error={errors.password}
        />
        {status && <Alert severity="error">{status}</Alert>}
        <Link to={"/forgotPassword"}>Forgot your password?</Link>
        <Button variant="contained" onClick={handleOnSubmit} type="submit" fullWidth>
          Continue
        </Button>
      </form>

      <Typography>
        Dont have an account yet?{" "}
        <Link className="noUnderLine" to={"/register"}>
          Sign up
        </Link>
      </Typography>
    </LoginFormStyled>
  );
};

export default LoginForm;
