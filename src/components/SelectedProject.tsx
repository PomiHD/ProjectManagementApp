import { Button } from "./Button.tsx";

export default function SelectedProject({ projectData,onDeletedProject }) {
  const formattedDate = new Date(projectData.dueDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );
  return (
    <>
      <div className={"w-[35rem] mt-16"}>
        <header className={"pb-4 mb-4 border-b-2 border-stone-300"}>
          <div className={"flex items-center justify-between"}>
            <h1 className={"text-3xl font-bold text-stone-600 mb-2"}>
              {projectData.title}
            </h1>
            <Button onClick={onDeletedProject}>Delete</Button>
          </div>
          <p className={"mb-4 text-stone-400"}>{formattedDate}</p>
          <p className={"text-stone-600 whitespace-pre-wrap"}>
            {projectData.description}
          </p>
        </header>
        <label>Task</label>
        <input type="text" />
        <div>
          <menu>
            <li >
              <p>task 1 details</p>
              <Button>Clear</Button>
            </li>
          </menu>
        </div>
      </div>
    </>
  );
}
