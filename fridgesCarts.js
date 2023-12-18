import { createSlice } from "@reduxjs/toolkit";

export const itemsInCartSlice = createSlice({
  name: "itemsInCart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotalAmount: (state) => {
        const total = state.items.reduce((sum, item) => sum + item.price, 0);
        state.totalAmount = total; // Add "totalAmount" to state
      },
  },
});

export const { addToCart, removeFromCart, setitemsInCart, calculateTotalAmount } =
  itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;