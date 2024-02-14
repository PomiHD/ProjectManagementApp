import { Button } from "./Button.tsx";
import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
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
