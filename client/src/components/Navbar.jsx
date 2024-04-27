import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  Badge,
  Button,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";
import Notification from "./Notification";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const productCount = useSelector((state) => state.cart.length);
  const [notify, setNotify] = React.useState({
    open: false,
    message: "",
    type: "",
  });
  const user =
    useSelector((state) => state.user) ||
    JSON.parse(localStorage.getItem("reserveUser"));

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#171717" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hotel
            </Typography>
          </Link>

          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Airport
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Link to={"/cart"} style={{ color: "white" }}>
              <Badge badgeContent={productCount} color="primary" sx={{ mr: 5 }}>
                <ShoppingCartIcon color="white" sx={{ fontSize: "26px" }} />
              </Badge>
            </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: "orange" }}>
                  {user?.name.slice(0, 1)}
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Typography sx={{ px: 1, fontWeight: "bold" }}>
                {user?.name}
              </Typography>
              {user ? (
                <LogoutButton setNotify={setNotify} notify={notify} />
              ) : (
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Notification setNotify={setNotify} notify={notify} />
    </AppBar>
  );
}
export default Navbar;
