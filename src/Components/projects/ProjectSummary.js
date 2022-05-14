import { Box, Card, CardContent, Typography } from "@mui/material";

const ProjectSummary = ({ project }) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {project.content}
          </Typography>
          <Typography variant="body2" color="#00ff">
            2<sup>th</sup> Jun 2022
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectSummary;
