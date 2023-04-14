import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CompletedTaskList: [],
};

const CompletedTaskSlice = createSlice({
  name: "completedTask",
  initialState: initialState,
  reducers: {
    setCompeletedTaskList: (state, action) => {
      state.CompletedTaskList = [...state.CompletedTaskList, action.payload];
    },
    clearCompletedTaskList: (state) => {
      state.CompletedTaskList = [];
    },
  },
});

export const { setCompeletedTaskList ,clearCompletedTaskList } = CompletedTaskSlice.actions;

export const getCompeletedTaskList = (state) =>
  state.completedTask.CompletedTaskList;

export default CompletedTaskSlice.reducer;
