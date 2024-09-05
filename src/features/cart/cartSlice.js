import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// DEFAULT STATE FOR THE CART
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  tax: 0,
  shipping: 500,
  cartTotal: 0,
  orderTotal: 0,
};

// FUNCTION TO GET THE CART FROM LOCAL STORAGE OR RETURN THE DEFAULT STATE IF NO CART IS FOUND
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || defaultState;
};

// REDUX SLICE FOR MANAGING THE CART STATE
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    // REDUCER FOR ADDING ITEMS TO THE CART
    addItems: (state, action) => {
      const { productItem } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === productItem.cartID);

      // IF THE ITEM ALREADY EXISTS IN THE CART, INCREASE THE AMOUNT
      if (item) {
        item.amount += productItem.amount;
      } else {
        // IF THE ITEM DOES NOT EXIST IN THE CART, ADD IT
        state.cartItems.push(productItem);
      }

      // UPDATE THE TOTAL NUMBER OF ITEMS IN THE CART AND THE TOTAL PRICE
      state.numItemsInCart += productItem.amount;
      state.cartTotal +=
        parseInt(productItem.amount) * parseInt(productItem.price);

      // CALCULATE THE TOTAL PRICE OF THE CART
      cartSlice.caseReducers.calculateCartTotal(state);

      // SHOW A SUCCESS MESSAGE
      toast.success("Item added to cart");
    },

    // REDUCER FOR REMOVING ITEMS FROM THE CART
    removeItems: (state, action) => {
      const { cartID } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);

      // REMOVE THE ITEM FROM THE CART
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      // UPDATE THE TOTAL NUMBER OF ITEMS IN THE CART AND THE TOTAL PRICE
      state.numItemsInCart -= item.amount;
      state.cartTotal -= parseInt(item.amount) * parseInt(item.price);

      // CALCULATE THE TOTAL PRICE OF THE CART
      cartSlice.caseReducers.calculateCartTotal(state);

      // SHOW AN ERROR MESSAGE
      toast.error("Item removed from cart");
    },

    // REDUCER FOR CLEARING THE CART
    clearItems: () => {
      // RESET THE CART TO THE DEFAULT STATE AND SAVE IT TO LOCAL STORAGE
      localStorage.setItem("cartItems", JSON.stringify(defaultState));
      return defaultState;
    },

    // REDUCER FOR EDITING THE QUANTITY OF ITEMS IN THE CART
    editItems: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);

      // UPDATE THE QUANTITY OF THE ITEM AND THE TOTAL NUMBER OF ITEMS IN THE CART AND THE TOTAL PRICE
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += (+amount - parseInt(item.amount)) * item.price;
      item.amount = amount;

      // CALCULATE THE TOTAL PRICE OF THE CART
      cartSlice.caseReducers.calculateCartTotal(state);

      // SHOW A SUCCESS MESSAGE
      toast.success("Item updated");
    },

    // REDUCER FOR CALCULATING THE TOTAL PRICE OF THE CART
    calculateCartTotal: (state) => {
      // CALCULATE THE TAX, TOTAL PRICE OF THE CART, AND THE TOTAL ORDER PRICE
      state.tax = 0.14 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;

      // SAVE THE CART TO LOCAL STORAGE
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

// EXPORT THE ACTIONS
export const { addItems, removeItems, clearItems, editItems } =
  cartSlice.actions;

// EXPORT THE SLICE
export default cartSlice.reducer;
