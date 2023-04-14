import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasklist: [],
};
const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.tasklist = [...state.tasklist, action.payload];
    },
    removeTaskList: (state, action) => {
      state.tasklist = state.tasklist.filter((element) => {
        return element !== state.tasklist[action.payload];
      });
    },
    editTaskList: (state, action) => {
      const { id, task } = action.payload;
      console.log(action.payload);
      console.log(action.type);
      state.tasklist[id] = task;
    },
  },
});

export const { setTaskList, removeTaskList, editTaskList } = TodoSlice.actions;

export const getTodoList = (state) => state.Todo.tasklist;

export default TodoSlice.reducer;
