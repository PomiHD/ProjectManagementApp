import { ReactNode, useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoNewProjectSelected from "./components/NoNewProjectSelected";
import SelectedProject from "./components/SelectedProject.tsx";
import { JSX } from "react/jsx-runtime";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // function handelAddTask(text: any) {
  //   setProjectsState((prevState) => {
  //     const minCeiled = Math.ceil(1);
  //     const maxFloored = Math.floor(100);
  //     const taskId = Math.floor(
  //       Math.random() * (maxFloored - minCeiled) + minCeiled,
  //     );
  //     const newTask = {
  //       text: text,
  //       projectId: prevState.selectedProjectId,
  //       id: taskId,
  //     };
  //     console.log(prevState.tasks);
  //     return {
  //       ...prevState,
  //       tasks: [newTask,...prevState.tasks],
  //     };
  //   });
  // }
  function handelAddTask(text: any) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          const minCeiled = Math.ceil(1);
          const maxFloored = Math.floor(100);
          const taskId = Math.floor(
            Math.random() * (maxFloored - minCeiled) + minCeiled,
          );
          const newTask = {
            text,
            projectId: prevState.selectedProjectId,
            id: taskId,
          };

          return { ...project, tasks: [...(project.tasks || []), newTask] }; // Ensure tasks array exists
        }
        return project;
      });

      return { ...prevState, projects: updatedProjects };
    });
  }

  function handelDeleteTask() {}

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // function handleAddProject(projectData: any) {
  //   setProjectsState((prevState) => {
  //     const minCeiled = Math.ceil(1);
  //     const maxFloored = Math.floor(100);
  //     const projectId = Math.floor(
  //       Math.random() * (maxFloored - minCeiled) + minCeiled,
  //     );
  //     const newProject = {
  //       ...projectData,
  //       id: projectId,
  //     };
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: [...prevState.projects, newProject],
  //     };
  //   });
  // }

  function handleAddProject(projectData: any) {
    setProjectsState((prevState) => {
      const minCeiled = Math.ceil(1);
      const maxFloored = Math.floor(100);
      const projectId = Math.floor(
        Math.random() * (maxFloored - minCeiled) + minCeiled,
      );
      const newProject = { ...projectData, id: projectId, tasks: [] }; // Initialize with empty tasks array

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: projectId,
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

  const selectedProject: any = projectsState.projects.find(
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

  let content: string | number | boolean | JSX.Element | Iterable<ReactNode>;

  if (selectedProject) {
    content = (
      <SelectedProject
        onDeletedProject={handelDeleteProject}
        onAddTask={handelAddTask}
        onDeleteTask={handelDeleteTask}
        projectData={selectedProject}
        tasks={selectedProject.tasks}
      />
    );
  }
  // let content = (
  //   <SelectedProject
  //     onDeletedProject={handelDeleteProject}
  //     onAddTask={handelAddTask}
  //     onDeleteTask={handelDeleteTask}
  //     projectData={selectedProject}
  //     tasks={selectedProject.tasks}
  //   />
  // );

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
