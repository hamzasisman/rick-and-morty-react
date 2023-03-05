import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {
        add(state, {payload}){
            state.push(payload)
        },
        del(state, { payload }){
            state.splice(state.indexOf(payload), 1);
        }
    }
})

export const { add, del } = favoritesSlice.actions
export default favoritesSlice.reducer