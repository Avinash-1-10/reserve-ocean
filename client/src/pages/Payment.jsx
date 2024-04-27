import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/actions/cartActions";

const Payment = ({ calculateTotal }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const items = cart.map((item) => ({
    item: item.item._id,
    quantity: item.quantity,
  }));
  const user = useSelector((state) => state.user);
  const reserveAuthToken = localStorage.getItem("reserveAuthToken");
  console.log(reserveAuthToken);

  const checkout = async (e) => {
    setLoading(true);
    if (!user) {
      navigate("/login");
      return;
    }
    const response = await axios.get(
      "https://reserve-ocean.onrender.com/api/v1/order/key",{},
      {
        headers: {
          Authorization: `Bearer ${reserveAuthToken}`,
        },
      }
    );
    const key = response?.data.data;
    const { data } = await axios.post(
      "https://reserve-ocean.onrender.com/api/v1/order/checkout",
      {
        items,
        total: calculateTotal(),
      },
      {
        headers: {
          Authorization: `Bearer ${reserveAuthToken}`,
        },
      }
    );
    const verify = async (info) => {
      const { data } = await axios.post(
        "https://reserve-ocean.onrender.com/api/v1/order/verify",
        info
      );
      if (data.status === 200) {
        dispatch(clearCart());
        navigate("/payment-success");
      }
    };

    var options = {
      key,
      amount: data.data.order.amount,
      currency: "INR",
      name: "Reserve Ocean",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/111282375?v=4",
      order_id: data.data.order.id,
      handler: async function (response) {
        const info = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          newOrderId: data.data.newOrderId,
        };
        await verify(info);
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: 1234567892,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      navigate("/payment-failed");
    });
    rzp1.open();
    setLoading(false);
    e.preventDefault();
  };
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Total Cost
      </Typography>
      <Typography variant="h5">₹{calculateTotal()}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={checkout}
        disabled={loading || cart.length === 0 || calculateTotal() === 0}
      >
        {loading ? "Loading..." : "Pay Now"}
      </Button>
    </>
  );
};

export default Payment;
