import React from "react";
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../redux/features/apiSlice";

const TodoItem = ({ userId, id, title, completed }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <div
      className={`flex items-center justify-between text-black ${
        completed ? "bg-green-400" : "bg-red-200"
      } rounded-lg py-4 px-4`}
    >
      <div className="flex items-center space-x-3">
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="checkbox"
          checked={completed}
          id={id}
          onChange={() =>
            updateTodo({ userId, id, title, completed: !completed })
          }
        />
        <h4 className={`${completed && "line-through"} font-semibold text-2xl`}>
          {title}
        </h4>
      </div>
      <button
        onClick={() => deleteTodo({ id })}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
