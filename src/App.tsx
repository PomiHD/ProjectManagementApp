import Sidebar from "./components/Sidebar.tsx";

import {NewProject} from "./components/NewProject.tsx";

function App() {
  
  return (
    <>
      <main className={"h-screen my-8 flex gap-8"}>
        <Sidebar/>
        <NewProject />
    </main>
    </>
  );
}

export default App;
