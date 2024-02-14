import {Button} from "./Button.tsx";
import {useState} from "react";

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState("");
  function handleAddTask(event) {
    setEnteredTask(event.target.value);
    console.log(enteredTask);
  }
  return <>
  <div className={"flex items-center gap-4 justify-end"}>
    <input onChange={handleAddTask} value={enteredTask} className={"w-full px-2 py-1 rounded-sm bg-stone-200"} type=" text" />
    <Button>Add Task</Button>
  </div>
  </>;
}
