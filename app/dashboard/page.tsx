"use client";
import { Box, Grid, Typography, styled } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const Header = styled(Typography)<TypographyOptions>(({ theme }) => ({
  fontSize: "32px",
  lineHeight: "38px",
  color: "rgb(4, 30, 73)",
  fontWeight: 500,
}));

export default function Page() {
  return (
    <Grid
      container
      sx={{
        padding: "16px",
      }}
    >
      <Grid item xs={12} md={12}>
        {/* <Box alignItems={"center"} justifyContent={"center"}>
          <Header>Project Overview</Header>
        </Box> */}
      </Grid>
    </Grid>
  );
}
