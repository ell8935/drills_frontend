import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../shared/hooks/useForm";
import { forgotPassword } from "../api/forgotPassword";
import ForgotPasswordStyled from "../styles/ForgotPasswordStyled";
import { emailValidation } from "../validation/emailValidation";
import AuthScreensWrapper from "../components/AuthScreensWrapper";

const ForgotPasswordScreen = () => {
  const [status, setStatus] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const { errors, form, handleOnBlur, handleOnChange, isFormValid } = useForm({
    initialState: { email: "" },
    schema: emailValidation,
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await isFormValid()) {
      try {
        await forgotPassword(form.email);
        setEmailSent(true);
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  if (emailSent) {
    return (
      <AuthScreensWrapper>
        <ForgotPasswordStyled>
          <Typography>Logo</Typography>
          <Typography variant="h3">ON THE WAY TO YOU!</Typography>
          <Typography variant="h6">
            We just sent you an email. Please follow the instructions in the
            email to access your account.
          </Typography>
          <Button onClick={handleGoToLogin} variant="contained">
            Go back to Login
          </Button>
        </ForgotPasswordStyled>
      </AuthScreensWrapper>
    );
  }

  return (
    <AuthScreensWrapper>
      <ForgotPasswordStyled>
        <Typography variant="h3">FORGOT YOUR PASSWORD?</Typography>
        <Typography variant="h6">
          No worries, we'll send you an email with instructions to reset your
          password
        </Typography>
        <form>
          <TextField
            name="email"
            type="email"
            label="Enter your email"
            placeholder="example@company.com"
            error={!!errors.email}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            helperText={errors.email}
          />

          {status && <Alert severity="error">{status}</Alert>}
          <Button variant="contained" onClick={handleOnSubmit} type="submit">
            Reset password
          </Button>
        </form>
        <Button onClick={handleGoToLogin}>Go back to login</Button>
      </ForgotPasswordStyled>
    </AuthScreensWrapper>
  );
};

export default ForgotPasswordScreen;
