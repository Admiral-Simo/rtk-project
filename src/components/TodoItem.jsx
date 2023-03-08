import React from "react";

const TodoItem = ({ userId, id, title, completed }) => {
  return (
    <div
      className={`flex items-center justify-between text-black ${
        completed ? "bg-green-400" : "bg-red-200"
      } rounded-lg py-4 px-4`}
    >
      <div className="flex items-center space-x-3">
        <p className="font-bold text-xl">{userId}</p>
        <h4 className={`${completed && "line-through"} font-semibold text-2xl`}>
          {title}
        </h4>
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
