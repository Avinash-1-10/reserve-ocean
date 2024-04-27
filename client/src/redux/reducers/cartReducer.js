import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from "../actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.item._id !== action.payload);
    case CLEAR_CART:
      return [];
    case INCREASE:
      return state.map((item) => {
        if (item.item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case DECREASE:
      return state.map((item) => {
        if (item.item._id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    default:
      return state;
  }
};

export default cartReducer;
