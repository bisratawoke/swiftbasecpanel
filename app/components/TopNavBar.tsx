"use client";

import { AppBar, Box, SpeedDialIcon, Toolbar, Typography } from "@mui/material";

export default function TopNavBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <Box alignItems={"center"} justifyContent={"center"}>
          {/* <SpeedDialIcon /> */}
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: 400,
              color: "black",
            }}
          >
            Cpanel
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
