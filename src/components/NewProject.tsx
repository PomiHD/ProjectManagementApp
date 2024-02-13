import Input from "./Input.tsx";

export function NewProject() {
  return (
    <>
      <div className={" w-[35rem] mt-16"}>
        <menu className={"flex items-center justify-end gap-4 my-4"}>
          <li>
            <button className={"text-stone-800 rounded hover:text-stone-950"}>
              cancel
            </button>
          </li>
          <li>
            <button
              className={
                "px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:text-stone-950"
              }
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input label={"Title"} isTextArea={true} />
          <Input label={"Description"} isTextArea={false} />
          <Input
            type="date"
            value="2017-06-01"
            label={"Due Date"}
            isTextArea={false}
          />
        </div>
      </div>
    </>
  );
}
