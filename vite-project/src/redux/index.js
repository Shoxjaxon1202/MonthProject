import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./features/loaderSlice";

import newsSlice from "./features/newsSlice";

const store = configureStore({
  reducer: {
    loaderStore: loaderSlice,
    newsStore: newsSlice,
  },
});

export default store;
