"use client";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { setCurrentProjectIdInLocalStorage } from "@/app/utils/utils";

export default function ProjectCard({ project }: any) {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        setCurrentProjectIdInLocalStorage(project.projectId);
        router.push("/dashboard");
      }}
      sx={{
        "&:hover": {
          scale: "1.01",
          cursor: "pointer",
        },
      }}
    >
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
  );
}
