import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // It can contain
  todos: [{ id: 1, text: "Hello world!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === ID) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // since we will be using reducers indiually it's part of syntax

export default todoSlice.reducer; // this tells the reducer about the reducers to the store and store acknowledges these reducers and confirm it'll allow changes in state only by these reducers
