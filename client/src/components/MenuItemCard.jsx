import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneIcon from "@mui/icons-material/Done";
import ItemDialog from "./ItemDialog";
import { useSelector } from "react-redux";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusMedium,
  transition: "transform 0.3s ease-in-out",
  width: "100%",
  boxShadow: theme.shadows[2],
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const MenuItemCard = ({ _id, name, price, image, category, description }) => {
  const [open, setOpen] = React.useState(false);
  const cart = useSelector((state) => state.cart);


  return (
    <>
      <StyledCard sx={{ width: { md: 250, lg: 300 } }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ height: 150 }}
        />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {category.name}
            </Typography>
          </div>
          <IconButton aria-label="add to cart">
            {/* Add your cart icon here */}
          </IconButton>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontWeight="bold">
            ₹{price.toFixed(2)}
          </Typography>
          {!cart.some((item) => item.item._id === _id) ? (
            <IconButton
              sx={{
                color: "green",
                fontSize: "30px",
                cursor: "pointer",
                ":hover": { color: "green.800" },
                transition: "color 0.3s ease-in-out",
              }}
              onClick={() => setOpen(true)}
            >
              <AddCircleIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                fontSize: "30px",
                cursor: "not-allowed",
              }}
            >
              <DoneIcon />
            </IconButton>
          )}
        </CardContent>
      </StyledCard>
      <ItemDialog
        open={open}
        setOpen={setOpen}
        name={name}
        image={image}
        price={price}
        description={description}
        category={category.name}
        _id={_id}
      />
    </>
  );
};

export default MenuItemCard;
