export function Button({ isClick }) {
  return (
    <>
      <p>
        <button
          onClick={isClick}
          className={
            "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100"
          }
        >
          + Add Project
        </button>
      </p>
    </>
  );
}
