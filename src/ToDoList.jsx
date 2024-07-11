import { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { description: "Shopping", status: true },
    { description: "Washing", status: false },
    { description: "Reading", status: true },
    { description: "Cooking", status: true },
    { description: "Writing", status: false },
    { description: "Gardening", status: false },
    { description: "Walking the dog", status: true },
  ]);

  const [task, setTask] = useState({ description: "", status: false });

  const handleInputChange = (e) => {
    setTask({ description: e.target.value, status: true });
  };

  const handleAddTask = () => {
    if (task.description.trim() !== "") {
      setTasks((prev) => [task, ...prev]);
      setTask({ description: "", status: false });
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prev) => prev.filter((el, i) => i != index));
  };

  const handleTaskUp = (index) => {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  const handleTaskDown = (index) => {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  return (
    <div className="w-11/12 mx-auto p-10 text-center text-white bg-slate-800">
      <h2 className="text-3xl my-5">To Do List</h2>
      <div className="w-full">
        <input
          className="text-black w-full md:w-1/2 border-none outline-none mr-5 p-2"
          type="text"
          placeholder="Enter new task"
          value={task.description}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="px-5 py-2 mt-3 md:my-0 bg-lime-700 rounded"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div className="my-5">
        <p className="text-sm text-rose-300">
          Click a task to change its status
        </p>
        <ul>
          {tasks.map((el, index) => (
            <ToDo
              key={el.description}
              index={index}
              el={el}
              length={tasks.length}
              handleDeleteTask={() => handleDeleteTask(index)}
              handleTaskUp={() => handleTaskUp(index)}
              handleTaskDown={() => handleTaskDown(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
