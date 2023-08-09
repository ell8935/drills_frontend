import { Button, Stack, Typography } from "@mui/material";
import AuthScreenWrapperStyled from "../styles/AuthScreenWrapperStyled";
import { ReactNode } from "react";

interface AuthScreensWrapperProps {
  children: ReactNode;
}

const AuthScreensWrapper = ({ children }: AuthScreensWrapperProps) => {
  return (
    <AuthScreenWrapperStyled>
      <div className="leftBox">
        <Typography variant="h2">
          Hundreds of projects are waiting just for you
        </Typography>
        <Typography variant="h6">
          Our platform will allow you to manange your sport club
        </Typography>
        <Stack spacing={1} direction="row">
          <Button size="large" variant="contained">
            Sign Up For Free
          </Button>
          <Button
            style={{ minWidth: 200 }}
            variant="contained"
            color="secondary"
          >
            How it works
          </Button>
        </Stack>
        <Stack
          className="copyRight"
          top={"96%"}
          left={"0%"}
          position={"absolute"}
          direction={"row"}
          alignItems={"center"}
        >
          <Button>Logo</Button>
          <Typography variant="subtitle2">
            | Copyright © 2023 All Rights Reserved.
          </Typography>
        </Stack>
      </div>
      <div className="rightBox">
        <div className="child">{children}</div>
      </div>
    </AuthScreenWrapperStyled>
  );
};

export default AuthScreensWrapper;
