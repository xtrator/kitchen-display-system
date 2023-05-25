import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import pageReducer from "./features/pageSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
  },
});
