import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { StatCardProps } from "../interfaces/interface";

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
