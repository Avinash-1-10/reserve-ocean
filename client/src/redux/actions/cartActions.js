import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from "../actionTypes";

const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

const clearCart = () => ({
  type: CLEAR_CART,
});

const increase = (id) => ({
  type: INCREASE,
  payload: id,
});

const decrease = (id) => ({
  type: DECREASE,
  payload: id,
});

export { addToCart, removeFromCart, clearCart, increase, decrease };
