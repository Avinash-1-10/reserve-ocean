import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/categories");
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Stack
      p={{ xs: 2, md: 5 }}
      flexDirection="row"
      gap={5}
      flexWrap="wrap"
      justifyContent="center"
    >
      {categories.map((menu, index) => (
        <CategoryCard key={index} {...menu} />
      ))}
    </Stack>
  );
};

export default Home;
