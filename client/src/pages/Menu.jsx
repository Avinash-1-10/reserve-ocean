import { Stack } from '@mui/material'
import React from 'react'
import menuItems from '../data/menuItems'
import MenuItemCard from '../components/MenuItemCard'

const Menu = () => {
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