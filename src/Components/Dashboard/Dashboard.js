import { Grid } from "@mui/material";
import React from "react";
import ProjectList from "../projects/ProjectList";
import Notification from "./Notification";

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      style={{ paddingTop: "15px" }}
    >
      <Grid item xs={6}>
        <ProjectList />
      </Grid>
      <Grid item xs={3}>
        <Notification />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
