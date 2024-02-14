import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoNewProjectSelected from "./components/NoNewProjectSelected";
import SelectedProject from "./components/SelectedProject.tsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
      const minCeiled = Math.ceil(1);
      const maxFloored = Math.floor(100);
      const projectId = Math.floor(
        Math.random() * (maxFloored - minCeiled) + minCeiled,
      );
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handelSelectProject(projectId: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );
  function handelDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => prevState.selectedProjectId !== project.id,
        ),
      };
    });
  }

  let content = (
    <SelectedProject
      onDeletedProject={handelDeleteProject}
      projectData={selectedProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSavedProject={handleAddProject}
        onCancelProject={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoNewProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }

  return (
    <>
      <main className={"h-screen my-8 flex gap-8"}>
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projectList={projectsState.projects}
          onSelectProject={handelSelectProject}
          selectedProjectId={undefined}
        />
        {content}
      </main>
    </>
  );
}

export default App;
