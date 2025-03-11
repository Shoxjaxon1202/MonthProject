import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  filter: [],
};
const newsSlice = createSlice({
  name: "newsStore",
  initialState,
  reducers: {
    fetchedNews: (state = initialState, action) => {
      state.news = action.payload;
    },
    addNewStore: (state = initialState, action) => {
      state.news = [...state.news, action.payload];
    },

    removeNew: (state = initialState, action) => {
      state.news = state.news.filter((el) => el.id == !action.payload);
    },
  },
});

export const { fetchedNews, addNewStore, removeNew } = newsSlice.actions;
export default newsSlice.reducer;
