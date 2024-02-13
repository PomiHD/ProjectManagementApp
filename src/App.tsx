import Sidebar from "./components/Sidebar.tsx";

import { NewProject } from "./components/NewProject.tsx";
import { useState } from "react";
import { NoNewProjectSelected } from "./components/NoNewProjectSelected.tsx";

function App() {
  const [isClickCreate, setIsClick] = useState(false);

  function handleClick() {
    setIsClick(!isClickCreate);
  }

  return (
    <>
      <main className={"h-screen my-8 flex gap-8"}>
        <Sidebar isClick={handleClick} />
        {isClickCreate ? <NewProject /> : <NoNewProjectSelected />}
      </main>
    </>
  );
}

export default App;
