import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allCategoriesProducts: [],
    filteredProducts: [],
}

const filterBar = createSlice({
    name: "filterBar" ,
    initialState:initialState ,
    reducers: {
        setAllProducts: (state , action) => { state.allCategoriesProducts = action.payload},
        setFilteredProducts: (state , action) => {state.filteredProducts = action.payload},
    }
})

export default filterBar.reducer;
export const {setAllProducts , setFilteredProducts} = filterBar.actions