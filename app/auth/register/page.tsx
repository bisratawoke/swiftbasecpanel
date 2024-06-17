"use client";
import { Box } from "@mui/material";
import RegisterForm from "@/app/Forms/RegisterForm";
export default function Page() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        paddingTop: "32px",
      }}
    >
      <RegisterForm />
    </Box>
  );
}
