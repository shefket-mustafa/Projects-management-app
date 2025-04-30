
import { useState } from "react";
import "./savedProject.css";

export default function SavedProject({ project, addTask, removeTask, deleteProject }) {
  const [taskInput, setTaskInput] = useState('');
 
  const taskInputHandler = (event) => {
    setTaskInput(event.target.value);
  }


  return (
    <>
      <div className="details-container">
        <div className="upper-container">
          <div className="upper-header">
            <h1>{project.title}</h1>
            <button onClick ={()=>deleteProject(project.id)}>Delete</button>
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
          <div className="tasks-container">
            <input type="text" onChange={taskInputHandler} value={taskInput}/>
            <button onClick={()=>{
              addTask(project.id,taskInput)
              setTaskInput('');
              }}>Add Task</button>
          </div>
        </div>

        <div className="tasks">
            <ul>
            {project.tasks.length > 0 
            ? project.tasks.map(task => 
              <li className="task-li" key={task.id}>
                <p>{task.title}</p>
                <button onClick={()=>removeTask(task.id)}>Clear</button>
              </li>) 
            : <p style={{fontFamily:'sans-serif'}}>No Tasks Yet..</p>}
            </ul>
          </div>  

      </div>
      
    </>
  );
}
