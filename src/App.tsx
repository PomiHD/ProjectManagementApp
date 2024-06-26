import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoNewProjectSelected from "./components/NoNewProjectSelected";
import SelectedProject from "./components/SelectedProject";

export type Task_ = {
  id: number;
  text: string;
};

export type Project = {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: string;
  tasks?: Task_[];
};

export type SelectedProjectId = number | null | undefined;

type ProjectState = {
  selectedProjectId: SelectedProjectId;
  projects: Project[];
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handelAddTask(text: string) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          const taskId = Math.floor(Math.random() * (100 - 1) + 1);
          const newTask = {
            id: taskId,
            text: text,
          };
          // Clone the project and update its tasks array
          return { ...project, tasks: [...project.tasks!, newTask] };
        }
        return project;
      });

      // Return the updated state with the modified projects array
      return { ...prevState, projects: updatedProjects };
    });
  }

  function handelDeleteTask(taskId: number) {
    setProjectsState((prevState) => {
      // Map through projects to find the one with the task to delete
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          // Filter out the task to delete
          const updatedTasks = project.tasks!.filter(
            (task) => task.id !== taskId,
          );
          // Return the project with the updated tasks array
          return { ...project, tasks: updatedTasks };
        }
        // Return all other projects as is
        return project;
      });

      // Return the updated state with the modified projects array
      return { ...prevState, projects: updatedProjects };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData: Project) {
    setProjectsState((prevState) => {
      const projectId = Math.floor(Math.random() * (100 - 1) + 1);
      const newProject = {
        ...projectData,
        id: projectId,
        tasks: [], // Initialize each project with an empty tasks array
      };

      // Add the new project to the projects array
      return {
        ...prevState,
        selectedProjectId: projectId, // Optionally select the new project
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handelSelectProject(projectId: SelectedProjectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  function handelDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId,
      ),
    }));
  }

  let content;

  if (selectedProject) {
    content = (
      <SelectedProject
        onDeletedProject={handelDeleteProject}
        onAddTask={handelAddTask}
        onDeleteTask={handelDeleteTask} // Placeholder for delete task functionality
        projectData={selectedProject}
        tasks={selectedProject.tasks}
      />
    );
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSavedProject={handleAddProject}
        onCancelProject={handleCancelAddProject}
      />
    );
  } else {
    content = (
      <NoNewProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projectList={projectsState.projects}
        onSelectProject={handelSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
