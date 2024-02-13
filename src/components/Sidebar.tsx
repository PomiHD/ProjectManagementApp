function Sidebar() {
  return (
    <>
      <aside>
        <div className="w-full h-96 max-w-sm p-8 mx-2 rounded shadow-md bg-gray-600">
          <h2>+ Your Projects</h2>
          <button
            className={
              "px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
            }
          >
            Add Project
          </button>
          <ul>list of projects</ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
