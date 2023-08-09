import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailInDb } from "../api/emailInDb";
import useForm from "../../../shared/hooks/useForm";
import { emailValidation } from "../validation/emailValidation";
import { Alert, Button, Divider, TextField, Typography } from "@mui/material";
import RegisterFormStyled from "../styles/RegisterFormStyled";

const RegisterForm = () => {
  const [status, setStatus] = useState("");
  const { errors, form, handleOnBlur, handleOnChange, isFormValid } = useForm({
    initialState: { email: "" },
    schema: emailValidation,
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await isFormValid()) {
      try {
        await emailInDb(form.email);
        // setForm(form);
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };

  return (
    <RegisterFormStyled>
      <Typography noWrap variant="h3" alignSelf={"center"} overflow={"visible"}>
        WELCOME TO REEMODELING
      </Typography>
      <Typography alignSelf={"center"} variant="h6">
        Get Started with your free plan
      </Typography>

      <form>
        <div>
          <Divider>OR</Divider>
        </div>
        <TextField
          className="email"
          name="email"
          type="email"
          label="Email address"
          error={!!errors.email}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.email}
          fullWidth
        />

        {status && <Alert severity="error">{status}</Alert>}
        <Button
          variant="contained"
          onClick={handleOnSubmit}
          type="submit"
          fullWidth
        >
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
