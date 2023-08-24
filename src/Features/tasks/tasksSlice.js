import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTasks: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskIndex }) => {
      const index = tasks.findIndex((task) => task.id === taskIndex);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
  },
});

export const {
  addTasks,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) =>
  selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export default tasksSlice.reducer;