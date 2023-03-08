import { useState } from "react";
import { useGetTodosQuery } from "../redux/features/apiSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo
    setNewTodo("");
  };

  let { data: content } = useGetTodosQuery();

  console.log(content);

  return (
    <main className="max-w-5xl pt-10 text-white mx-auto text-xl">
      <h1 className="text-5xl font-serif font-bold mb-5">Todo List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex mb-5 flex-row items-center space-x-3"
      >
        <input
          className="py-5 text-black focus:outline-none px-5 bg bg-gray-50 rounded-lg flex-1"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="py-5 px-5 bg-green-500 text-white rounded-lg  font-semibold"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <div className="space-y-3">
        {content.map((item) => (
          <TodoItem {...item} />
        ))}
      </div>
    </main>
  );
};

export default TodoList;
