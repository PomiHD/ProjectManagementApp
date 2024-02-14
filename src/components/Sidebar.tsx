import { Button } from "./Button.tsx";

function Sidebar({
  onStartAddProject,
  projectList,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside>
      <div className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className={"mb-8 font-bold uppercase md:text-xl text-stone-200"}>
          Your Projects
        </h2>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className={"mt-8"}>
          {projectList.map((project) => {
            let cssClasses =
              "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100";
            if (project.id == selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <Button
                  className={cssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
