import './savedProject.css'

export default function SavedProject({project}) {
  return (
        <>
        <div className="details-container">

          <div className="upper-container">
          <h1>{project.title}</h1>
          <button>Delete</button>
          <p>{project.date}</p>
          <p>{project.description}</p>
          </div>

          <div className="lower-container">
            <h1>Tasks</h1>
            <input type="text" />
            <button>Add Task</button>

            <div className="tasks"></div>
          </div>

        </div>
        </>     
    );
}