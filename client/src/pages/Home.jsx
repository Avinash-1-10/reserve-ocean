import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Stack
      sx={{
        height: "calc(100vh - 64px)",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503543830055-c3b3189e964b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2" sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
        HILTON LONDON HEATHROW AIRPORT
      </Typography>
      <Link to={"/categories"}>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          bgcolor: "black",
          p: 2,
          px: 3,
          ":hover": { bgcolor: "black" },
        }}
      >
        Get Started
      </Button>
      </Link>
    </Stack>
  );
};

export default Home;
