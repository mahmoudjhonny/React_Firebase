import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  const { projects } = useSelector((state) => state.project);
  return (
    <Stack spacing={3} direction="column">
      {projects &&
        projects.map((project) => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </Stack>
  );
};

export default ProjectList;
