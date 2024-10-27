import React from "react";
import { Switch, FormControlLabel, Typography } from "@mui/material";

interface NavBarProps {
  isUserPresent: boolean;
  setIsUserPresent: (isUserPresent: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isUserPresent, setIsUserPresent }) => {
  const handleToggleSwitch = () => {
    setIsUserPresent(!isUserPresent);
  };
  return (
    <div style={{ padding: "24px", position: "absolute", right: "0" }}>
      <FormControlLabel
        control={
          <Switch
            onChange={handleToggleSwitch}
            checked={isUserPresent}
            color="primary"
          />
        }
        label={isUserPresent ? "User" : "Admin"}
      />
    </div>
  );
};

export default NavBar;
