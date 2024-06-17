import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import CreateProjectCard from "@/app/components/CreateProjectCard";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
export default async function Home() {
  const session = await getServerSession(AuthOptions);

  const res = await fetch(`${process.env.BACKEND_API}/project`, {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });
  if (!(res.status == 200)) {
    throw new Error("something went wrong");
  }

  const projects: Array<{
    projectName: string;
    projectId: string;
  }> = await res.json();

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
