import { useState } from "react";
import "./savedProject.css";

export default function SavedProject({ project }) {

  const[savedTasks, setSavedTasks] = useState([]);

  const addTaskHandler = (task) => {
    setSavedTasks(prevTasks => [...prevTasks, task])
  };


  return (
    <>
      <div className="details-container">
        <div className="upper-container">
          <div className="upper-header">
            <h1>{project.title}</h1>
            <button>Delete</button>
          </div>
          <p style={{ color: "grey" }}>
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p>{project.description}</p>
        </div>

        <div className="lower-container">
          <h1>Tasks</h1>
          <div className="tasks">
            <input type="text" />
            <button>Add Task</button>
          </div>

          <div className="tasks"></div>
        </div>
      </div>
    </>
  );
}
