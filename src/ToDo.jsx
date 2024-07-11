import { useState } from "react";

const ToDo = ({
  el,
  index,
  length,
  handleDeleteTask,
  handleTaskUp,
  handleTaskDown,
}) => {
  const [task, setTask] = useState(el);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setTask((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleStatusChange = () => {
    setTask((prev) => ({ ...prev, status: !prev.status }));
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <li className="my-5">
      {isEditing ? (
        <input
          value={task.description}
          onChange={(e) => handleInputChange(e)}
          className="text-black border-none outline-none mr-5 p-2 w-full md:w-auto mb-2"
        />
      ) : (
        <span
          onClick={handleStatusChange}
          className={`${
            task.status
              ? "no-underline text-white"
              : "text-gray-400 line-through"
          } text-2xl mr-5`}
        >
          {task.description.trim() === "" ? (
            <span className="text-rose-700">Enter a task</span>
          ) : (
            task.description
          )}
        </span>
      )}
      <span className="block my-2 md:my-0 md:inline-block">
        <button
          className="mr-5 p-2 bg-sky-500 rounded my-2 md:my-0"
          onClick={handleEdit}
        >
          {isEditing ? "OK" : "Edit"}
        </button>
        <button
          className="mr-5 p-2 bg-rose-500 rounded my-2 md:my-0"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
        {index > 0 && (
          <button
            className="mr-5 p-2 bg-amber-500 rounded my-2 md:my-0"
            onClick={handleTaskUp}
          >
            Up &uarr;
          </button>
        )}
        {index < length - 1 && (
          <button
            className="mr-5 p-2 bg-amber-600 rounded my-2 md:my-0"
            onClick={handleTaskDown}
          >
            Down &darr;
          </button>
        )}
      </span>
    </li>
  );
};

export default ToDo;
