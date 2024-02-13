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
          <p>
            <label>Title</label>
            <input />
          </p>
          <p>
            <label>Description</label>
            <textarea />
          </p>
          <p>
            <label>Due date</label>
            <input />
          </p>
        </div>
      </div>
    </>
  );
}
