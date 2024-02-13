import Sidebar from "./components/Sidebar.tsx";

import {NewProject} from "./components/NewProject.tsx";
import {useState} from "react";

function App() {
  const [isClickCreate, setIsClick] = useState(false);
  function handleClick() {
    setIsClick(!isClickCreate);
  }
  
  return (
    <>
      <main className={"h-screen my-8 flex gap-8"}>
        <Sidebar isClick={handleClick}/>
        {isClickCreate && <NewProject />}
    </main>
    </>
  );
}

export default App;
