import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
})

export default store