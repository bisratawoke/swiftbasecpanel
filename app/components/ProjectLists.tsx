"use client";

import { CircularProgress, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { ChildrenCenterAlignedBackdrop } from "./ChildrenCenterAlignedBackdrop";
import { useState } from "react";

export default function ProjectList({ projects }: any) {
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);

  return (
    <>
      <ChildrenCenterAlignedBackdrop open={openBackdrop}>
        <CircularProgress />
      </ChildrenCenterAlignedBackdrop>
      {projects.map((project: any, indx: number) => (
        <Grid key={indx} item md={3}>
          <ProjectCard project={project} setOpenBackdrop={setOpenBackdrop} />
        </Grid>
      ))}
    </>
  );
}
