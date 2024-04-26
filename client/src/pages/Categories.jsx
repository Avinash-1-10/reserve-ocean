import React, { useEffect, useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, seLoading] = useState(false);
  const getCategories = async () => {
    seLoading(true);
    try {
      const { data } = await axios.get("/api/v1/categories");
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      seLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (loading)
    return (
      <Stack
        p={{ xs: 2, md: 5 }}
        flexDirection="row"
        gap={5}
        flexWrap="wrap"
        justifyContent="center"
      >
        {[1,2,3,4,5,6,7,8,9].map((_,i) => (
          <Skeleton key={i} variant="rectangular" width={345} height={250} />
        ))}
      </Stack>
    );
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

export default Categories;
