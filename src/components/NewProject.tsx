import { useRef, useState } from "react";
import Input from "./Input";
import Model from "./Model.tsx";

const NewProject = ({ onSavedProject }) => {
  const [isCancel, setIsCancel] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);
  const dialog = useRef<any>();

  function handleSave() {
    //No duplicate saving of the project
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      //show error model
      dialog.current?.open();
      return;
    }
    onSavedProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel() {
    setIsCancel(!isCancel);
  }

  return (
    <>
      <Model ref={dialog} buttonCaption={"Close"}>
        <p>Please enter a valid title, description and due date</p>
      </Model>
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
