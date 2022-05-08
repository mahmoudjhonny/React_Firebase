import { SupervisedUserCircle } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SigedInLinks = () => {
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <NavLink to="/">
        <Typography variant="h6" component="p" sx={{ color: "#ffffff" }}>
          New Project
        </Typography>
      </NavLink>
      <NavLink to="/">
        <Typography
          variant="h6"
          component="p"
          sx={{ textDecoration: "none", color: "#ffffff" }}
        >
          LogOut
        </Typography>
      </NavLink>
      <NavLink to="/">
        <Avatar sx={{ bgcolor: "#ff00ff" }}>
          <SupervisedUserCircle />
        </Avatar>
      </NavLink>
    </Stack>
  );
};

export default SigedInLinks;
