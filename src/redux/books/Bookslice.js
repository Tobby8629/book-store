import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const Bookslice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => (
      { books: state.books.filter((book) => book.item_id !== action.payload.id) }
    ),
    categoryBook: (state, action) => ({
      books: state.books.filter((book) => book.category === action.payload.catego),
    }),
  },
});

export default Bookslice.reducer;
export const { addBook, removeBook, categoryBook } = Bookslice.actions;
