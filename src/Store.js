import { configureStore } from "@reduxjs/toolkit";
import CompeletedTask from "./Redux/Reducer/CompeletedTaskSlice";
import TodoLi from "./Redux/Reducer/TodoListSlice";

export default configureStore({
  reducer: {
    completedTask: CompeletedTask,
    Todo: TodoLi,
  },
});
