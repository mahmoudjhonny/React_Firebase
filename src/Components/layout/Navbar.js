import { LocalFireDepartment } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SigedInLinks from "./SigedInLinks";
import SigedOutLinks from "./SigedOutLinks";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#c2185b", padding: "5px" }}
    >
      <Toolbar>
        <IconButton aria-label="logo" sx={{ color: "#fce4ec" }}>
          <LocalFireDepartment />
        </IconButton>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{ color: "#fce4ec", flexGrow: 1, textDecoration: "none" }}
        >
          Firebase App
        </Typography>
        <Stack spacing={3} direction="row" sx={{ marginRight: "15px" }}>
          <SigedOutLinks />
          <SigedInLinks />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
