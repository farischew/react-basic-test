import { useState } from "react";
import TodoItem from "./TodoItem";

import { TODO_LIST } from "../utils/Todo";

function TodoList() {
  const [tasks, setTasks] = useState(TODO_LIST);

  // TASK 1:
  // Create a function named addText that accepts a variable text. Your new
  // function addText should use setTask to add a new task

  // TASK 2:
  // Create a function named deleteTask that accepts a variable id. Your new
  // function deleteText should use setTask to delete a task based on given id

  // TASK 3:
  // Create a function named toggleComplete that accepts a variable id. Your new
  // function toggleComplete should use setTask to toggle the completed key of
  // the task of given id

  // TASK 4:
  // The To-Do list has an input form for users to add new tasks. Utilise useState
  // detect input change from the user filling up the input. Whn the user clicks
  // on the Add button, utilise your addTask function to add the text as a new task

  // TASK 5:
  // Using your knowledge of Tailwind, add some life into your To-do list with some styling.
  // Be as creative as you'd like

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          // Use your deleteTask function here:
          // deleteTask={deleteTask}

          // Use your toggleCompleted function here:
          // toggleCompleted={toggleCompleted}
        />
      ))}
      <div className="flex gap-3">
        <input
          className="border"
          // value={}
          // onChange={}
        />
        <button
          className="bg-purple-300 px-4 py-0.5 rounded-lg"
          // Use your addTask function here:
          // onClick={}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default TodoList;
