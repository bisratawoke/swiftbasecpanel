import FetchProjects from "@/app/actions/FetchProjects";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
export default async function Home() {
  const projects = await FetchProjects();

  return <></>;
}
