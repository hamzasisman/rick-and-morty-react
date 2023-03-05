import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites";

export default configureStore({
    reducer: {
        favorites: favoritesReducer
    }
})