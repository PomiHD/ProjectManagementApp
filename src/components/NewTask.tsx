import { Button } from "./Button.tsx";
import { SetStateAction, useState } from "react";

type NewTaskProps = {
  onAdd: (task: string) => void;
};

export default function NewTask({ onAdd }: NewTaskProps) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim().length === 0) return;
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <div className={"flex items-center gap-4 justify-end"}>
        <input
          onChange={handleChange}
          value={enteredTask}
          className={"w-full px-2 py-1 rounded-sm bg-stone-200"}
          type=" text"
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
    </>
  );
}
