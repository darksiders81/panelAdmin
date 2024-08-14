import { useRoutes } from "react-router-dom";
import "./App.css";
import SidBar from "./components/Sidbar/SidBar";
import TopBar from "./components/TopBar/TopBar";
import allRoutes from "./routes";
function App() {
  let router = useRoutes(allRoutes);
  return (
    <>
      <TopBar />
      <div className="flex gap-3">
        <SidBar />
        {router}
      </div>
    </>
  );
}

export default App;
