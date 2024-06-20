"use client";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonProps,
  SpeedDialIcon,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useSession } from "next-auth/react";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: pink[500],
}));

export default function TopNavBar() {
  const { data: session } = useSession();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        // borderBottom: "1px solid silver",
      }}
    >
      <Toolbar>
        <Box alignItems={"center"} justifyContent={"center"} flexGrow={1}>
          {/* <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Helvetica",
              fontWeight: 700,
              color: "rgb(11, 87, 208)",
            }}
          >
            Cpanel
          </Typography> */}
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
