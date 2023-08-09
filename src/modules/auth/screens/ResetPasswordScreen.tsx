/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomTextField from "../../../shared/components/CustomTextField";
import useForm from "../../../shared/hooks/useForm";
import LoadingAnimationStyled from "../../../shared/styles/LoadingAnimationStyled";
import { AuthResetPassword, resetPassword } from "../api/forgotPassword";
import ResetPasswordStyled from "../styles/ResetPasswordStyled";
import resetPasswordValidation from "../validation/resetPasswordValidation";
import AuthScreensWrapper from "../components/AuthScreensWrapper";

const ResetPasswordScreen = () => {
  const [status, setStatus] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const { errors, form, handleOnBlur, handleOnChange, isFormValid, setForm } =
    useForm({
      initialState: {
        password: "",
        confirmPassword: "",
        email: "",
        token: "",
      },
      schema: resetPasswordValidation,
    });

  useEffect(() => {
    const validateUrlToken = async () => {
      const query = new URLSearchParams(window.location.search);
      const token = query.get("token") || "";
      const email = query.get("email") || "";
      setForm({ ...form, email, token });
      try {
        await AuthResetPassword(email, token);
        setIsLoading(false);
        setIsValidToken(true);
      } catch (err) {
        setIsLoading(false);
        setIsValidToken(false);
      }
    };
    validateUrlToken();
  }, []);

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await isFormValid()) {
      try {
        await resetPassword({ ...form });
        setStatus("Password changed");
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };
  if (isLoading) {
    return (
      <AuthScreensWrapper>
        <LoadingAnimationStyled>
          <div className="loader"></div>
        </LoadingAnimationStyled>
      </AuthScreensWrapper>
    );
  }
  if (!isValidToken) {
    return (
      <AuthScreensWrapper>
        <Typography variant="h1"> Link is not valid</Typography>
      </AuthScreensWrapper>
    );
  }

  return (
    <AuthScreensWrapper>
      <ResetPasswordStyled>
        <Typography variant="h3">Enter your new password</Typography>
        <form>
          <TextField
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            error={!!errors.password}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            helperText={errors.password}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton
            //         onClick={() => setShowPassword(!showPassword)}
            //         edge="end"
            //       >
            //         <Iconify
            //           icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
            //         />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />

          <CustomTextField
            name={"confirmPassword"}
            label={"Confirm Password"}
            error={errors.confirmPassword}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />

          {status && <Alert severity="error">{status}</Alert>}
          <Button variant="contained" onClick={handleOnSubmit} type="submit">
            Continue
          </Button>
        </form>
      </ResetPasswordStyled>
    </AuthScreensWrapper>
  );
};

export default ResetPasswordScreen;
