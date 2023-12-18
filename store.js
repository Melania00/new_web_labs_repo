import { configureStore } from "@reduxjs/toolkit";
import itemsInCartReducer from "./fridgesCarts";

export default configureStore({
  reducer: { itemsInCart: itemsInCartReducer },
});