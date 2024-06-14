import { Grid } from "@mui/material";
import TopNavBar from "@/app/components/TopNavBar";
import SideNavBar from "@/app/components/SIdeNavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <Grid container>
        <Grid
          item
          md={12}
          sx={{
            borderBottom: "1px solid silver",
          }}
        >
          <TopNavBar />
        </Grid>
        <Grid
          item
          md={2}
          sx={{
            borderRight: "1px solid silver",
          }}
          minHeight={"100vh"}
        >
          <SideNavBar />
        </Grid>
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
    </>
  );
}
