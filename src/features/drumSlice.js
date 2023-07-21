import { createSlice } from "@reduxjs/toolkit";

export const drumSlice = createSlice({
    name: 'drum',
    initialState: {name: ''},
    reducers: {
        fetchData(state, action) {
            state.name = action.payload
        }
    }  
})

export const {fetchData} = drumSlice.actions;
export default drumSlice.reducer;