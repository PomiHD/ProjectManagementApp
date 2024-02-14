import { Button } from "./Button.tsx";
import NewTask from "./NewTask.tsx";

export default function Task() {
  return (
    <>
      <section>
        <h2 className={"text-2xl font-bold text-stone-600 mb-4"}>Tasks</h2>
        <NewTask />
        <li>
          <p>task 1 details</p>
          <Button>Clear</Button>
        </li>
      </section>
    </>
  );
}
