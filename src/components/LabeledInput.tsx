import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface LabeledInputProps {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <Grid component="div">
      <Typography variant="subtitle2" gutterBottom>
        {label}
      </Typography>
      <TextField
        fullWidth
        label={value}
        variant="outlined"
        onChange={onChange}
        name={name}
      />
    </Grid>
  );
};

export default LabeledInput;
