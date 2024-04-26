import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CategoryCard = ({ name, image }) => {
  return (
    <Card sx={{ width: 345, boxShadow: 3, ":hover": { boxShadow: 6 } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign={"center"}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
