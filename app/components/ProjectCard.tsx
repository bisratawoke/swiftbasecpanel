import { Card, CardHeader, Typography } from "@mui/material";

export default function ProjectCard() {
  return (
    <Card
      sx={{
        height: "200px",
      }}
    >
      <CardHeader>
        <Typography sx={{ fontSize: "22px" }} gutterBottom>
          header
        </Typography>
        <Typography sx={{ fontSize: "14px" }} gutterBottom>
          subheader
        </Typography>
      </CardHeader>
    </Card>
  );
}
