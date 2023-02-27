import { configureStore } from '@reduxjs/toolkit';
import Bookreducer from './books/Bookslice';
import CategoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    Book: Bookreducer,
    Categories: CategoriesReducer,
  },
});

export default store;
