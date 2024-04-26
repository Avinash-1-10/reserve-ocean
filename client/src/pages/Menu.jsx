import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import MenuItemCard from '../components/MenuItemCard'
import {useLocation} from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([])
  const loation = useLocation()
  const catId = loation.state.id || loation.pathname.split('/')[2]
  const getMenuItems = async () => {
    try {
      const { data } = await axios.get(`/api/v1/menuItem/category/${catId}`)
      setMenuItems(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMenuItems()
  }, [])
  return (
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
  )
}

export default Menu