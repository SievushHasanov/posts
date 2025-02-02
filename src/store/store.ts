import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import likedPostsReducer from './likedPostsSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    likedPosts: likedPostsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
