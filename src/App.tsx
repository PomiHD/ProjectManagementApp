import { ReactNode, useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoNewProjectSelected from "./components/NoNewProjectSelected";
import { JSX } from "react/jsx-runtime";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let content: string | number | boolean | JSX.Element | Iterable<ReactNode>;

  if (projectsState.selectedProjectId === null) {
    content = (
        <NewProject onSavedProject={handleAddProject}/>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoNewProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }

  // Callback function to add saved project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData: any) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectsState);

  return (
    <>
      <main className={"h-screen my-8 flex gap-8"}>
        {/*<Sidebar isClick={handleClick} projectList={projectList} />*/}
        {/*{isClickCreate ? (*/}
        {/*  <NewProject onProjectSave={handleStartAddProject} />*/}
        {/*) : (*/}
        {/*    <NoNewProjectSelected onStartAddProject={handleStartAddProject} />*/}
        {/*)}*/}
        <Sidebar projectList={projectsState} onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
