
import './leftContainer.css';

export default function LeftContainer({ addHandler, projects, projectHandler }) {
  

  return (
      <>
      <div className="left-container">

      <h1>YOUR PROJECTS</h1>
      <div className='add-proj'>
      <button onClick={addHandler}>+ Add project</button>
      </div>

      <div className='projects'>
        <ul>
        {projects.map(project => (
          <li onClick={() =>projectHandler(project)} key={project.id} className='project-item'>{project.title}</li>
        ))}
        </ul>
      </div>

      </div>
      </>
    );
}