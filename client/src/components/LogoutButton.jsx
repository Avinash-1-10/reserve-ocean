import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/actions/userActions";
import Notification from "./Notification";

const LogoutButton = ({ notify, setNotify }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post("https://reserve-ocean.onrender.com/api/v1/user/logout");
      localStorage.removeItem("reserveAuthToken");
      localStorage.removeItem("reserveUser");
      dispatch(clearUser());
      setNotify({
        open: true,
        message: data.message,
        type: "success",
      });
    } catch (error) {
      setNotify({
        open: true,
        message: error.response.data.message,
        type: "error",
      });
    }
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default LogoutButton;
