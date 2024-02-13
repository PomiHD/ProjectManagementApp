import Input from "./Input.tsx";

export function NewProject() {
  return (
    <>
      <div>
        <menu>
          <li>
            <button>cancel</button>
          </li>
          <li>
            <button>save</button>
          </li>
        </menu>
        <div>
          <Input label={"Title"} isTextArea={true} />
          <Input label={"Description"} isTextArea={false} />
          <Input label={"Due Date"} isTextArea={true} />
        </div>
      </div>
    </>
  );
}
