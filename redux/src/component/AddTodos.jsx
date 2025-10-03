import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // dispatch uses reducer to make required changes in state of the store

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        className="bg-grey-800 rounded border border-grey-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter a Todo..."
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodos;
