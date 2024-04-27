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
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  removeFromCart,
} from "../redux/actions/cartActions";
import Payment from "./Payment";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];

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
    const total = cart.reduce(
      (total, item) => total + item.item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          boxShadow: 3,
          height: "fit-content",
        }}
      >
        <Typography variant="h5">Cart is Empty</Typography>
        <Typography variant="body1">Add some items to your cart</Typography>
        <Link to={"/categories"}>
          <Button variant="contained" sx={{ mt: 3 }}>Shop Now</Button>
        </Link>
      </Box>
    );
  }
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
        {cart.map((item, index) => (
          <Card
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <CardMedia
              component="img"
              sx={{ height: 125, width: 125, objectFit: "cover" }}
              image={item.item.image}
              alt={item.item.name}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">{item.item.name}</Typography>
              <Typography variant="body2">Price: ₹{item.item.price}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  disabled={item.quantity <= 1}
                  onClick={() => dispatch(decrease(item.item._id))}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  disabled={item.quantity == 5}
                  onClick={() => dispatch(increase(item.item._id))}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Stack>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() => dispatch(removeFromCart(item.item._id))}
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
          height: "fit-content",
        }}
      >
        <Payment calculateTotal={calculateTotal} />
      </Box>
    </Box>
  );
};

export default Cart;
