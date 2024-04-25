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
import ItemDialog from "./ItemDialog";

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

const MenuItemCard = ({ id, productName, price, image, category }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <StyledCard sx={{ width: { md: 250, lg: 300 } }}>
        <CardMedia
          component="img"
          image={
            "https://images.pexels.com/photos/12557608/pexels-photo-12557608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={productName}
          sx={{ height: 150 }}
        />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h6">{productName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
          </div>
          <IconButton aria-label="add to cart">
            {/* Add your cart icon here */}
          </IconButton>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" fontWeight="bold">
            ${price.toFixed(2)}
          </Typography>
          <AddCircleIcon
            sx={{
              color: "green",
              fontSize: "30px",
              cursor: "pointer",
              ":hover": { color: "green.800" },
              transition: "color 0.3s ease-in-out",
            }}
            onClick={() => setOpen(true)}
          />
        </CardContent>
      </StyledCard>
      <ItemDialog
        open={open}
        setOpen={setOpen}
        productName={productName}
        image={image}
        price={price}
      />
    </>
  );
};

export default MenuItemCard;
