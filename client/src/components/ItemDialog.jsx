import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ItemDialog({
  open,
  setOpen,
  name,
  price,
  description,
  category,
  _id,
  image,
}) {
  //   console.log(open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
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
            <DialogContentText>
              {description}
            </DialogContentText>
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
                {price}
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
              >
                <RemoveIcon />
              </IconButton>
              <Typography fontFamily={"sans-serif"} fontSize={"1.3rem"}>
                1
              </Typography>
              <IconButton
                color="primary"
                sx={{ bgcolor: "#e3f2fd", "&:hover": { bgcolor: "#e3f2fd" } }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Add To Cart</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
