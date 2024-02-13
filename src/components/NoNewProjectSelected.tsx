import noProjectImage from "../assets/no-projects.png";

export function NoNewProjectSelected() {
  return (
    <>
      <div className={"mt-24 text-center w-2/3"}>
        <img
          className={"w-16 mx-auto lg:w-48 items-center"}
          src={noProjectImage}
          alt={"no project exist!"}
        />
        <h2 className={"text-xl font-bold text-stone-600 my-4"}>
          No Project Selected
        </h2>
        <p className={"text-stone-400 mb-4"}>
          Create a new project or select an existing project to get started
        </p>
        <p>
          <button
            className={
              "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100"
            }
          >
            + Add Project
          </button>
        </p>
      </div>
    </>
  );
}
