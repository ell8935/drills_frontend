import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emailInDb } from "../api/emailInDb";
import useForm from "../../../shared/hooks/useForm";
import { emailValidation } from "../validation/emailValidation";
import { Alert, Button, Divider, Typography } from "@mui/material";
import RegisterFormStyled from "../styles/RegisterFormStyled";
import CustomTextField from "../../../shared/components/CustomTextField";
import { toast } from "react-toastify";
import { register } from "../api/register";

const RegisterForm = () => {
  const [status, setStatus] = useState("");
  const { errors, form, handleOnBlur, handleOnChange, isFormValid, setForm } = useForm({
    initialState: { email: "", password: "" },
    schema: emailValidation,
  });
  useEffect(() => {
    notify();
  }, []);
  const notify = () => toast("Wow so easy!");

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (await isFormValid()) {
      try {
        await register({ email: form.email, password: form.password });
        // Checking if there is already a user registered under this email
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };

  return (
    <RegisterFormStyled>
      <Typography noWrap variant="h3" alignSelf={"center"} overflow={"visible"}>
        WELCOME TO DRILLS
      </Typography>
      <Typography alignSelf={"center"} variant="h6">
        Get Started with your free plan
      </Typography>

      <form>
        <div>
          <Divider>OR</Divider>
        </div>
        <CustomTextField
          className="email"
          name="email"
          type="email"
          label="Email address"
          error={errors.email}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.email}
          fullWidth
        />
        <CustomTextField
          className="password"
          name="password"
          label="Password"
          error={errors.password}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.password}
          fullWidth
          isPassword
        />

        {status && <Alert severity="error">{status}</Alert>}
        <Button variant="contained" onClick={handleOnSubmit} type="submit" fullWidth>
          Continue
        </Button>
      </form>
      <Stack alignSelf="center" direction={"row"} spacing={1}>
        <Typography>Already have an account?</Typography>
        <Link to={"login"}>Log in</Link>
      </Stack>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
