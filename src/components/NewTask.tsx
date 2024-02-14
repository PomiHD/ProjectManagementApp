import {Button} from "./Button.tsx";

export default function NewTask() {
  return <>
  <div className={"flex items-center gap-4 justify-end"}>
    <input className={"w-full px-2 py-1 rounded-sm bg-stone-200"} type=" text" />
    <Button>Add Task</Button>
  </div>
  </>;
}
