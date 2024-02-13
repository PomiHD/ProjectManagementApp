import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoNewProjectSelected from "./components/NoNewProjectSelected";

function App() {
  
  const [projectList, setProjectList] = useState([]);
  const [isClickCreate, setIsClick] = useState(false);

  function handleClick() {
    setIsClick(!isClickCreate);
  }

  // Callback function to add saved project
  function handleSaveProject(savedProject: any) {
    setProjectList(prevState => [...prevState, savedProject]);
  }

  return (
      <>
        <main className={"h-screen my-8 flex gap-8"}>
          <Sidebar isClick={handleClick} projectList ={projectList}/>
          {isClickCreate ? (
                <NewProject onProjectSave={handleSaveProject} />
          ) : (
              <NoNewProjectSelected isClick={handleClick} />
          )}
        </main>
      </>
  );
}

export default App;
