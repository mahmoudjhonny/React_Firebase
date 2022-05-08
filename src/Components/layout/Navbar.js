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
      sx={{
        backgroundColor: "#c2185b",
        padding: "5px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="logo" sx={{ color: "#fce4ec" }}>
          <LocalFireDepartment />
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ color: "#fce4ec", marginLeft: "5px" }}
          >
            Firebase App
          </Typography>
        </IconButton>
        <Stack spacing={3} direction="row" sx={{ marginRight: "15px" }}>
          <SigedOutLinks />
          <SigedInLinks />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
