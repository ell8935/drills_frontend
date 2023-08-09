import { IconButton, InputAdornment, InputProps } from "@mui/material";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
interface CustomTextFieldProps
  extends Omit<OutlinedTextFieldProps, "variant" | "error"> {
  name: string;
  error?: string;
  isPassword?: boolean;
}

const CustomTextField = ({
  value,
  name,
  error,
  isPassword,
  ...rest
}: CustomTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  const inputProps: InputProps = {};

  if (isPassword) {
    inputProps.endAdornment = (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  }

  return (
    <TextField
      {...rest}
      name={name}
      size="small"
      value={value}
      error={!!error}
      helperText={error}
      variant="outlined"
      InputProps={inputProps}
      type={showPassword ? "password" : rest.type || "text"}
    />
  );
};

export default CustomTextField;
