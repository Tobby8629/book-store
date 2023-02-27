import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
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
