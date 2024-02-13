import { Button } from "./Button.tsx";

function Sidebar({ isClick }) {
  return (
    <>
      <aside>
        <div className="w-1/3 h-2/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <h2 className={"mb-8 font-bold uppercase md:text-xl text-stone-200"}>
            Your Projects
          </h2>
          <Button isClick={isClick} />
          <ul>list of projects</ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
