import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack
      sx={{
        height: "calc(100vh - 64px)",
        backgroundImage:
          "url(https://images.pexels.com/photos/3646833/pexels-photo-3646833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          bgcolor: "white",
          p: 2,
          borderRadius: 2,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
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
