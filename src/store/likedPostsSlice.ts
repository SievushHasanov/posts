import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedPostsState {
  likedPosts: number[];
  deletedPosts: number[];
}

const initialState: LikedPostsState = {
  likedPosts: [],
  deletedPosts: [],
};

const likedPostsSlice = createSlice({
  name: 'likedPosts',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.likedPosts.includes(id)) {
        state.likedPosts = state.likedPosts.filter((postId) => postId !== id);
      } else {
        state.likedPosts.push(id);
      }
    },
    deletePost(state, action: PayloadAction<number>) {
      state.deletedPosts.push(action.payload);
    },
  },
});

export const { toggleLike, deletePost } = likedPostsSlice.actions;
export default likedPostsSlice.reducer;
