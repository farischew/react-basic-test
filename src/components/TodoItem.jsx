import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        checked={task.completed}
        // This should be your toggle complete button
        // onChange={}
      />
      <p>{task.text}</p>
      <button
      // This should be your delete button
      // onClick={}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
