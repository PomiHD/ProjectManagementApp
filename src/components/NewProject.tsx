import { useRef } from "react";
import { Input, TextArea } from "./Input";
import Model, { ModelHandles } from "./Model.tsx";
import { Project } from "../App.tsx";

type NewProjectProps = {
  onSavedProject: (project: Project) => void;
  onCancelProject: () => void;
};
const NewProject = ({ onSavedProject, onCancelProject }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const dialog = useRef<ModelHandles>(null);

  function handleSave() {
    //No duplicate saving of the project
    const enteredTitle = titleRef.current?.value || "";
    const enteredDescription = descriptionRef.current?.value || "";
    const enteredDueDate = dueDateRef.current?.value || "";

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      //show error model
      dialog.current!.open();
      return;
    }
    onSavedProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Model ref={dialog} buttonCaption={"Close"}>
        <h2 className={"text-xl font-bold text-stone-600 my-4"}>
          Invalid Input
        </h2>
        <p className={" text-xl font-bold text-stone-600 my-4"}>
          Please enter a valid title, description and due date
        </p>
      </Model>
      <div className={" w-[35rem] mt-16"}>
        <menu className={"flex items-center justify-end gap-4 my-4"}>
          <li>
            <button
              onClick={onCancelProject}
              className={"text-stone-800 rounded hover:text-stone-950"}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className={
                "px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:text-stone-950"
              }
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} />
          <TextArea ref={descriptionRef} label={"Description"} />
          <Input ref={dueDateRef} type="date" label={"Due Date"} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
