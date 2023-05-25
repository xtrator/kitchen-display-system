import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "home",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setPage } = pageSlice.actions;

export const selectPage = (state) => state.page;

export default pageSlice.reducer;
