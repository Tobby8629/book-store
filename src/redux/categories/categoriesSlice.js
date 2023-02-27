import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkstatus: () => ({ categories: 'under construction' }),
  },
});

export default categories.reducer;
export const { checkstatus } = categories.actions;
