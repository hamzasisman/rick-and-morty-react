import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('favorites') !== null ? JSON.parse
    (localStorage.getItem('favorites')) : []

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: items,
    reducers: {
        add(state, { payload }) {
            state.push(payload)
            // localStorage.setItem('favorites', JSON.stringify(state.favorites.map(item => item)))
        },
        del(state, { payload }) {
            state.splice(state.indexOf(payload), 1);
            // localStorage.setItem('favorites', JSON.stringify(state.favorites.map(item => item)))
        }
    }
})

export const { add, del } = favoritesSlice.actions
export default favoritesSlice.reducer