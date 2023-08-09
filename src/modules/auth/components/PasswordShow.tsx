import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface PasswordShowProps {
  onChange: boolean;
}

const PasswordShow = ({ onChange }: PasswordShowProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = () => {
    setShowPassword(!showPassword);
    onChange = showPassword;
  };

  return (
    <InputAdornment position="end">
      <IconButton onClick={handleChange} edge="end">
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </InputAdornment>
  );
};
export default PasswordShow;
