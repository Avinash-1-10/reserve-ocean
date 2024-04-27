import { Button, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItemCard from "../components/MenuItemCard";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const loation = useLocation();
  const [loading, setLoading] = useState(false);
  const catId = loation.state.id || loation.pathname.split("/")[2];

  const getMenuItems = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://reserve-ocean.onrender.com/api/v1/menuItem/category/${catId}`);
      setMenuItems(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenuItems();
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            sx={{ width: { md: 250, lg: 300 } }}
            height={300}
          />
        ))}
      </Stack>
    );
  return (
    <>
      <Link to={"/categories"}>
        <Button variant="contained" sx={{ bgcolor: "black", m: 2, ":hover": { bgcolor: "black" } }}>
          Back
        </Button>
      </Link>

      <Stack
        p={{ xs: 2, md: 5 }}
        flexDirection="row"
        gap={5}
        flexWrap="wrap"
        justifyContent="center"
      >
        {menuItems.map((menu, index) => (
          <MenuItemCard key={index} {...menu} />
        ))}
      </Stack>
    </>
  );
};

export default Menu;
