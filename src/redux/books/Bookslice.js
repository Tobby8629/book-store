import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const bookapi = createAsyncThunk('book/bookapi', async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A4ggDxm2RBk24bDOxJsp/books');
  const data = await res.json();
  return data;
});

export const addbookapi = createAsyncThunk('book/addbookapi', async (payload) => {
  const body = {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: 'ficition',
  };
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A4ggDxm2RBk24bDOxJsp/books',
    {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  const data = await res.text();
  return { data, body };
});

export const deleteapi = createAsyncThunk('book/deleteapi', async (payload) => {
  const { id } = payload;
  const res = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A4ggDxm2RBk24bDOxJsp/books/${id}`,
    {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  const data = await res.text();
  return { data, id };
});

const initialState = {
  books: [],
};

const Bookslice = createSlice({
  name: 'book',
  initialState,
  // reducers: {
  //   addBook: (state, action) => {
  //     state.books.push(action.payload);
  //   },
  //   removeBook: (state, action) => (
  //     { books: state.books.filter((book) => book.item_id !== action.payload.id) }
  //   ),
  //   categoryBook: (state, action) => ({
  //     books: state.books.filter((book) => book.category === action.payload.catego),
  //   }),
  // },
  extraReducers: (builder) => {
    builder.addCase(bookapi.fulfilled, (state, action) => {
      const fresh = Object.entries(action.payload);
      return {
        books: fresh.map((book) => ({
          id: book[0],
          ...book[1][0],
        })),
      };
    });

    builder.addCase(addbookapi.fulfilled, (state, action) => {
      const item = action.payload.body;
      const newitem = {
        id: item.item_id,
        author: item.author,
        title: item.title,
        category: item.category,
      };
      state.books.push(newitem);
    });

    builder.addCase(deleteapi.fulfilled, (state, action) => (
      { books: state.books.filter((book) => book.id !== action.payload.id) }));
  },
});

export default Bookslice.reducer;
export const { addBook, removeBook, categoryBook } = Bookslice.actions;
