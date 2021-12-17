import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import books from "../../fakeData/books.json";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (userId, thunkAPI) => {
    const response = await fetch(
      "https://redux-book-shelf.herokuapp.com/books"
    ).then((res) => res.json());
    return response.data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: [],
    readingList: [],
    finishedList: [],
  },
  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book._id !== payload
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { addToReadingList, removeFromReadingList } = bookSlice.actions;

export default bookSlice.reducer;
