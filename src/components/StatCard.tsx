import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { StatCardProps } from "../interfaces/interface";

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card
      sx={{
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#193920",
      }}
    >
      <CardContent>
        <Typography variant="body2" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="h4" color="white" fontWeight="fontWeightBold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
