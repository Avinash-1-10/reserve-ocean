import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MenuTypesCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{ width: 345, boxShadow: 3, ":hover": { boxShadow: 6 } }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            "https://images.pexels.com/photos/4669211/pexels-photo-4669211.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt={title}
          sx={{
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuTypesCard;
