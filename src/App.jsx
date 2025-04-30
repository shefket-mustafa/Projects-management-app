import { useState } from "react"
import LeftContainer from "./components/left-container/LeftContainer"
import Main from "./components/main/Main"
import AddProject from "./components/add-project/AddProject";
import SavedProject from "./components/saved-project/SavedProject";
import { v4 as uuid} from 'uuid';


function App() {
  const [isAddProjClicked, setIsAddProjClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);


  const addProjHandler = () => {
    setIsAddProjClicked(state => !state);
  }

  const addProjectHandler = (project) => {
    const newProject = {
      ...project,
      tasks:[],
      id: uuid()
    };
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

  const projectHandler = (project) => {
    setCurrentProject(project);
    setIsAddProjClicked(false);
  };

  const addTask = (projectId, taskTitle) => {
    setProjects(prevProjects => {

      const updated =  prevProjects.map(project => project.id === projectId ? {
      ...project,
      tasks:[
        ...project.tasks,
        {id: uuid(),
          title: taskTitle
        }
      ]
    } : project)
  

    const updatedCurrent = updated.find(project => project.id === projectId)
    setCurrentProject(updatedCurrent)

    return updated
  });


  }

  return (
    <>
    <div className="main-container">

    <LeftContainer 
    addHandler={addProjHandler} 
    projects={projects}
    projectHandler={projectHandler}
    
    />

      {isAddProjClicked 
      ? (<AddProject addProject={addProjectHandler}/>) 
      : currentProject 
      ? (<SavedProject project={currentProject} addTask={addTask}/>) 
      : <Main addHandler={addProjHandler}
      />}
      

      </div>
    </>
  )
}

export default App
