import { useState } from "react"
import LeftContainer from "./components/left-container/LeftContainer"
import Main from "./components/main/Main"
import AddProject from "./components/add-project/AddProject";
import SavedProject from "./components/saved-project/SavedProject";


function App() {
  const [isAddProjClicked, setIsAddProjClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const addProjHandler = () => {
    setIsAddProjClicked(state => !state);
  }

  const addProjectHandler = (project) => {
    setProjects(prevProjects => [...prevProjects, project]);
  }

  const projectHandler = (project) => {
    setCurrentProject(project);
    setIsAddProjClicked(false);
  };

  return (
    <>
    <div className="main-container">

    <LeftContainer 
    addHandler={addProjHandler} 
    projects={projects}
    projectHandler={projectHandler}
    
    />

      {isAddProjClicked ? (<AddProject addProject={addProjectHandler}/>) : currentProject ? (<SavedProject project={currentProject}/>) : <Main/>}
      

      </div>
    </>
  )
}

export default App
