import { Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SigedOutLinks = () => {
  return (
    <>
      <Stack
        spacing={3}
        direction="row"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <NavLink to="/">
          <Typography variant="h6" component="p" sx={{ color: "#ffffff" }}>
            Signup
          </Typography>
        </NavLink>
        <NavLink to="/">
          <Typography variant="h6" component="p" sx={{ color: "#ffffff" }}>
            Login
          </Typography>
        </NavLink>
      </Stack>
    </>
  );
};

export default SigedOutLinks;
