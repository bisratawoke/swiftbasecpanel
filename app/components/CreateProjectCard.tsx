"use client";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function CreateProjectCard() {
  return (
    <Card sx={{}}>
      <CardContent
        sx={{
          height: "150px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AddIcon
          sx={{
            color: " rgb(11, 87, 208)",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "rgb(11, 87, 208)",
            fontFamily: "Helvetica",
          }}
        >
          Add Project
        </Typography>
      </CardContent>
    </Card>
  );
}
