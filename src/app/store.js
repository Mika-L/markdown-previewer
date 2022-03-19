import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import markdownReducer from '../features/counter/markdown';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    markdown: markdownReducer
  },
});
