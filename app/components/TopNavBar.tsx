"use client";
import {
  AppBar,
  Avatar,
  Box,
  SpeedDialIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function TopNavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <Box alignItems={"center"} justifyContent={"center"} flexGrow={1}>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Helvetica",
              fontWeight: 700,
              color: "rgb(11, 87, 208)",
            }}
          >
            Cpanel
          </Typography>
        </Box>
        <Box alignItems="center" justifyContent={"center"}>
          <Avatar
            sx={{
              backgroundColor: "#7B1FA2",
            }}
          >
            {/* {session?.user?.name?.split("")[0]} */}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
