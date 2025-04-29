import { useState } from "react"
import LeftContainer from "./components/left-container/LeftContainer"
import Main from "./components/main/Main"
import AddProject from "./components/add-project/AddProject";


function App() {
  const [isAddProjClicked, setIsAddProjClicked] = useState(false);
  const [projects, setProjects] = useState([]);

  const addProjHandler = () => {
    setIsAddProjClicked(state => !state);
  }

  const addProjectHandler = (project) => {

    setProjects(prevProjects => [...prevProjects, project]);
  }

  return (
    <>
    <div className="main-container">

    <LeftContainer 
    addHandler={addProjHandler} 
    projects={projects}
    
    />

      {isAddProjClicked ? <AddProject addProject={addProjectHandler}/> : <Main />}
      

      </div>
    </>
  )
}

export default App
