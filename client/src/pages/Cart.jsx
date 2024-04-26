import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import cartItems from "../data/cartItems";

const Cart = () => {
  const [items, setItems] = useState([...cartItems, ...cartItems]);

  const handleQuantityChange = (id, delta) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: 3,
        gap: 2,
      }}
    >
      <Box sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <CardMedia
              component="img"
              sx={{height: 125, width:125, objectFit:"cover" }}
              image={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800"}
              alt={item.title}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">Price: ${item.price}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Stack>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() => handleRemoveItem(item.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          boxShadow: 3,
          height:"fit-content",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Total Cost
        </Typography>
        <Typography variant="h5">${calculateTotal()}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
