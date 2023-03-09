import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../redux/features/apiSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  let {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos?.map((item) => <TodoItem key={item.id} {...item} />);
  } else if (isError) {
    content = <p>{error}</p>;
  }
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
      <div className="space-y-3">{content}</div>
    </main>
  );
};

export default TodoList;
