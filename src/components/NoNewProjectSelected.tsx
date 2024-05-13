import noProjectImage from "../assets/no-projects.png";
import { Button } from "./Button.tsx";

type NoNewProjectSelectedProps = {
  onStartAddProject: () => void;
};
export default function NoNewProjectSelected({
  onStartAddProject,
}: NoNewProjectSelectedProps) {
  return (
    <>
      <div className={"mt-24 text-center w-2/3"}>
        <img
          className={"w-16 h-16 mx-auto object-contain items-center"}
          src={noProjectImage}
          alt={"no project exist!"}
        />
        <h2 className={"text-xl font-bold text-stone-600 my-4"}>
          No Project Selected
        </h2>
        <p className={"text-stone-400 mb-4"}>
          Create a new project or select an existing project to get started
        </p>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
    </>
  );
}
