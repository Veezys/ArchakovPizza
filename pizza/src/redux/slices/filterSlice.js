import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  currentPopUpItem: {
    name: 'популярности',
    sortProperty: 'rating',
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setCurrentPopUpItem(state, action) {
      state.currentPopUpItem = action.payload;
    }
  }
})

export const {setCategoryIndex, setCurrentPopUpItem} = filterSlice.actions;

export default filterSlice.reducer;