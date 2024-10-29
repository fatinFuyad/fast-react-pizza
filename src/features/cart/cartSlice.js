import { createSlice } from "@reduxjs/toolkit";

// demo cart for checking cartOverview
// cart: [{pizzaId: 123,name: "Mediterranean",unitPrice: 16,quantity: 2,totalPrice: 32,},],
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload: item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
      // state.cart.splice(
      //   state.cart.findIndex((item) => (item.pizzaId = action.payload)),
      //   1,
      // );
    },
    increaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// reduce should start with 0 otherwise the first sum will be an item object
// redux recommendation is to use the function in the slice and centralize the logic
// this type of using selectors can cause performance issues in larger applications and for that reselect library might be used
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
