import { useRef, useState } from "react";
import Input from "./Input";

const NewProject = ({onSavedProject}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function handleSave() {
    //No duplicate saving of the project

    setIsSaved(!isSaved);
    const savedProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    onSavedProject(savedProject);
    console.log(savedProject);
  }

  function handleCancel() {
    setIsCancel(!isCancel);
  }

  return (
    <>
      <div className={" w-[35rem] mt-16"}>
        <menu className={"flex items-center justify-end gap-4 my-4"}>
          <li>
            <button
              onClick={handleCancel}
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
          <Input ref={titleRef} label={"Title"} isTextArea={true} />
          <Input
            ref={descriptionRef}
            label={"Description"}
            isTextArea={false}
          />
          <Input
            ref={dueDateRef}
            type="date"
            label={"Due Date"}
            isTextArea={false}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
