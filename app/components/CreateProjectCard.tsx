"use client";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormDrawer from "./FormDrawer";
import CreateProjectForm from "../Forms/CreateProjectForm";
export default function CreateProjectCard() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <Card sx={{}}>
      <CardContent
        sx={{
          height: "150px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => {
          setOpenDrawer(true);
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
      <FormDrawer open={openDrawer} setOpen={setOpenDrawer}>
        <CreateProjectForm />
      </FormDrawer>
    </Card>
  );
}
