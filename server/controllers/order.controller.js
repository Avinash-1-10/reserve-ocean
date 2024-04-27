import Order from "../models/order.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";
import instance from "../utils/razorpay.js";

const checkout = async (req, res) => {
  try {
    const { items, total } = req.body;
    const user = req.user;

    if (!items || !total) {
      return res.status(400).json(new ApiError(400, "Invalid request."));
    }
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (order) {
      const newOrder = new Order({
        user: user._id,
        items: items,
        total: total,
      });
      await newOrder.save();
      return res.status(200).json(
        new ApiResponse(200, "Order created successfully.", {
          order,
          newOrderId: newOrder._id,
        })
      );
    }
  } catch (error) {
    console.error("Error during order creation: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while creating order."
        )
      );
  }
};

const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      newOrderId,
    } = req.body;
    const data = `${razorpay_order_id}|${razorpay_payment_id}`;

    const calculatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(data)
      .digest("hex");

    const isSignatureValid = calculatedSignature === razorpay_signature;
    if (isSignatureValid) {
      const order = await Order.findById(newOrderId);
      if (order) {
        order.paymentStatus = "Paid";
        order.paymentId = razorpay_payment_id;
        await order.save();
        return res
          .status(200)
          .json(new ApiResponse(200, "Payment verified successfully."));
      }
    } else {
      return res
        .status(400)
        .json(new ApiError(400, "Payment verification failed."));
    }
  } catch (error) {
    console.error("Error during payment verification: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while verifying payment."
        )
      );
  }
};

const getKey = async (req, res) => {
  try {
    const key = process.env.RAZORPAY_KEY_ID;
    return res
      .status(200)
      .json(new ApiResponse(200, "Key retrieved successfully.", key));
  } catch (error) {
    console.error("Error during payment verification: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while verifying payment."
        )
      );
  }
};

export { checkout, verifyPayment, getKey };
