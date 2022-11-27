import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.items = [...state.items, action.payload];
    }
    // removeCart: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload.id);
    // }
  }
});

export const { addCart, removeCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => (total += 100), 0);

export default cartSlice.reducer;
