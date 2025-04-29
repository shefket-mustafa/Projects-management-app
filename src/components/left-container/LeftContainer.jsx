import './leftContainer.css';

export default function LeftContainer({ addHandler, projects }) {
  return (
      <>
      <div className="left-container">

      <h1>YOUR PROJECTS</h1>
      <div className='add-proj'>
      <button onClick={addHandler}>+ Add project</button>
      </div>

      <div className='projects'>
        {projects.map(project => (
          <li key={project} className='project-item'>{project.title}</li>
        ))}
      </div>

      </div>
      </>
    );
}