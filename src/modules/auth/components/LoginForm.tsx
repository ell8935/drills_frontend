import { useState } from "react";
import { Button, Divider, Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/login";
// import { useSignIn } from "react-auth-kit";
import LoginFormStyled from "../styles/LoginFormStyled";
import useForm from "../../../shared/hooks/useForm";
import CustomTextField from "../../../shared/components/CustomTextField";
import { GoogleLogin } from "@react-oauth/google";
import { emailValidation } from "../validation/emailValidation";

//login > backend jwt generation using the secret and returns to the UI the token >
//in front end
// if (token) {
//   config.headers.Authorization = token;
// }
//> every request using the above
const LoginForm = () => {
  // const signIn = useSignIn();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const { form, handleOnBlur, handleOnChange, errors } = useForm({
    initialState: { email: "", password: "" },
    schema: emailValidation,
  });

  const handleSuccess = async (tokenResponse: any) => {
    //send tokenResponse to server and get JWT and refresh token
    // after that dispatch all the user details and the refresh and jwt token
    // dispatch(setAuth(user))

    navigate("/club");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await login(form);

      if (data.token) {
        // signIn({
        //   token: data.token,
        //   expiresIn: 3600,
        //   tokenType: "Bearer",
        //   authState: { email: form.email },
        // });
        navigate("/dashboard");
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
        <Button
          variant="contained"
          onClick={handleOnSubmit}
          type="submit"
          fullWidth
        >
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
