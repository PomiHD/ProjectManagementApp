import { Button } from "./Button.tsx";

function Sidebar({ isClick, projectList }) {
  return (
    <>
      <aside>
        <div className="w-1/3 h-2/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <h2 className={"mb-8 font-bold uppercase md:text-xl text-stone-200"}>
            Your Projects
          </h2>
          <Button isClick={isClick} />
          {projectList.length > 0 ? (
            <ul>
              {" "}
              {projectList.map((project, index) => (
                <li key={index}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <p>{project.dueDate}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h2>No Project List</h2>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
