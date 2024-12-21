import React from "react";
import { Box, Divider, Typography } from "@mui/material";

type RecommendedCardProps = {
  title: string;
  subtitle: string;
};

const RecommendedCard: React.FC<RecommendedCardProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E2E2E",
        color: "white",
        padding: "16px",
        textAlign: "center",
        cursor: "pointer",
        height: 150,
        display:'flex',
        justifyContent:'space-evenly',
        flexDirection:'column',
        alignItems:'center'

      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Hiragino Kaku Gothic Pro",
          marginBottom: "8px",
          color: "#FFCC21",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ width: "30%"}}>
        <Divider variant="middle" sx={{ borderColor: "#FFFFFF" }} />
      </Box>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Hiragino Kaku Gothic Pro" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default RecommendedCard;
