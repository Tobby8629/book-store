import { configureStore } from '@reduxjs/toolkit';
import Bookreducer from '../feature/books/Bookslice';
import CategoriesReducer from '../feature/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    Book: Bookreducer,
    Categories: CategoriesReducer,
  },
});

export default store;
