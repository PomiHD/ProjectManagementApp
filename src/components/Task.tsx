import { Button } from "./Button.tsx";
import NewTask from "./NewTask.tsx";


export default function Task({ tasks, onAdd, onDelete }) {

  return (
    <>
      <section>
        <h2 className={"text-2xl font-bold text-stone-600 mb-4"}>Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length===0 && (
          <p className={"text-stone-600"}>
            No tasks found. Add a task to get started.
          </p>
        )}
        {tasks.length > 0 && (
          <ul className={"p-4 mt-8 rounded-sm bg-stone-100"}>
            {tasks.map((task) => (
              <li key={task.id} className={"flex my-4 justify-between"}>
                <span className={"text-stone-600"}>{task.text}</span>
                <Button onClick={onDelete}>Clear</Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
