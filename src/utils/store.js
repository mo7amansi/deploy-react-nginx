import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
