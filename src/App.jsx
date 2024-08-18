import { useRoutes } from "react-router-dom";
import "./App.css";
import SidBar from "./components/Sidbar/SidBar";
import TopBar from "./components/TopBar/TopBar";
import allRoutes from "./routes";
function App() {
  let router = useRoutes(allRoutes);
  return (
    <div className="font-vazir">
      <TopBar />
      <div className="flex gap-3">
        <SidBar />
        <div className="absolute left-0 mt-24">{router}</div>
      </div>
    </div>
  );
}

export default App;
