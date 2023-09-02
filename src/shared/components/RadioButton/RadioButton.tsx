import { Button, ButtonGroup } from "@mui/material";
import { RadioOption } from "../../../modules/club/constants/radioButtonOptions";

interface RadioButtonProps {
  selectedValue: string;
  handleOnChange: (value: any) => void;
  options: RadioOption[];
}
export const RadioButton = ({ selectedValue, handleOnChange, options }: RadioButtonProps) => {
  return (
    <div>
      <ButtonGroup variant="outlined" color="primary" aria-label="Choose an option">
        {options.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleOnChange(option.value)}
            variant={selectedValue === option.value ? "contained" : "outlined"}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
