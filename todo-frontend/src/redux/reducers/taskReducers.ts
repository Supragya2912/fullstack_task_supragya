import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../constants/types";

const initialState: {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
} = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.unshift(action.payload);
    },
    addTaskSuccess: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, addTaskSuccess } = taskSlice.actions;
export default taskSlice.reducer;
