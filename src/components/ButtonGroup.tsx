import React from "react";
import { Box, Button } from "@mui/material";
import InputIcon from "../assets/svgs/morning.svg";
import ViewIcon from "../assets/svgs/lunch.svg";
import SettingsIcon from "../assets/svgs/dinner.svg";

const ButtonGroup: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" gap={2} mt={2}>
      <Button
        variant="contained"
        startIcon={<img src={InputIcon} alt="Input Data" />}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'white' }}
      ></Button>
      <Button
        variant="contained"
        startIcon={<img src={ViewIcon} alt="View Details" />}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'white' }}
      ></Button>
      <Button
        variant="contained"
        startIcon={<img src={SettingsIcon} alt="Settings" />}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'white' }}
      ></Button>
      <Button
        variant="contained"
        startIcon={<img src={SettingsIcon} alt="Settings" />}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'white' }}
      ></Button>
    </Box>
  );
};

export default ButtonGroup;
