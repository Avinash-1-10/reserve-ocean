import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ _id, name, image }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/menu/${_id}`, { state: { id: _id } });
  };
  return (
    <Card
      sx={{ width: 345, boxShadow: 3, ":hover": { boxShadow: 6 } }}
      onClick={handleNavigate}
    >
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
