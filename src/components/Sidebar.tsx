import { Button } from "./Button.tsx";

function Sidebar({ onStartAddProject, projectList }) {
  return (
    <aside>
      <div className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className={"mb-8 font-bold uppercase md:text-xl text-stone-200"}>
          Your Projects
        </h2>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className={"mt-8"}>
          {projectList.map((project) => (
            <li key={project.id}>
              <button
                className={
                  "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-100 bg-stone-700 hover:bg-stone-700"
                }
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
