import { Grid } from "@mui/material";
import SideNavBar from "@/app/components/SIdeNavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <Grid container>
        <Grid item md={2} minHeight={"100vh"}>
          <SideNavBar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
