import FetchProjects from "@/app/actions/FetchProjects";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CreateProjectCard from "@/app/components/CreateProjectCard";
export default async function Home() {
  const projects: Array<{
    projectName: string;
    projectId: string;
  }> = await FetchProjects();
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginBottom: "32px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "20px",
          }}
        >
          Recent projects
        </Typography>
      </Box>
      <Grid
        container
        spacing={"16px"}
        sx={{
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <Grid item md={3}>
          <CreateProjectCard />
        </Grid>
        {projects.map((project, indx) => (
          <Grid key={indx} item md={3}>
            <Card>
              <CardContent
                sx={{
                  spacing: "8px",
                  height: "150px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  {project.projectName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {project.projectId}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
