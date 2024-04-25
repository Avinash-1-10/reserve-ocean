import React from "react";
import MenuTypesCard from "../components/MenuTypesCard";
import { Box, Stack } from "@mui/material";
import { menusTypes } from "../data/menuTypes";

const Home = () => {
  

  return (
    <Stack
      p={{ xs: 2, md: 5 }}
      flexDirection="row"
      gap={5}
      flexWrap="wrap"
      justifyContent="center"
    >
      {menusTypes.map((menu, index) => (
        <MenuTypesCard key={index} {...menu} />
      ))}
    </Stack>
  );
};

export default Home;
