import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: 'price',
  initialState: { price: JSON.parse(localStorage.getItem('price')) || 0 },
  reducers: {
    changePrice: (state, action) => {
      state.price = action.payload;
      localStorage.setItem('price', JSON.stringify(state.price))
    },
  },
})

export const { changePrice } = ProductSlice.actions

export default ProductSlice.reducer