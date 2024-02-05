import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './ProductSlice'

const store = configureStore({
  reducer: {
    productStore: ProductSlice.reducer,
  },
})

export default store