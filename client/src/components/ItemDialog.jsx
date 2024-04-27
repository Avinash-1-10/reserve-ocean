import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../redux/actions/cartActions";
export default function ItemDialog({
  open,
  setOpen,
  name,
  price,
  description,
  category,
  _id,
  image,
  notify,
  setNotify,
}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(addToCart({ item: { _id, name, image, price }, quantity }));
    setNotify({
      open: true,
      message: `${quantity} ${name} Added to cart`,
      type: "success",
    });
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent sx={{ display: { xs: "block", md: "flex" }, gap: 2 }}>
          <Box width={{ xs: "100%", md: "100%" }}>
            <img
              src={image}
              alt=""
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </Box>
          <Stack display={"flex"} flexDirection={"column"} gap={2}>
            <DialogContentText>{description}</DialogContentText>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#d32f2f",
                }}
              >
                ₹{price}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {category}
              </Typography>
            </Stack>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              gap={3}
              py={"5px"}
              alignItems={"center"}
              border={"1px solid #e0e0e0"}
              borderRadius={"5px"}
              mt={"auto"}
              mb={2}
            >
              <IconButton
                color="secondary"
                sx={{ bgcolor: "#ffebee", "&:hover": { bgcolor: "#ffebee" } }}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography fontFamily={"sans-serif"} fontSize={"1.3rem"}>
                {quantity}
              </Typography>
              <IconButton
                color="primary"
                sx={{ bgcolor: "#e3f2fd", "&:hover": { bgcolor: "#e3f2fd" } }}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === 5}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Add To Cart</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
