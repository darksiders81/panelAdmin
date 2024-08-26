import { useRoutes } from "react-router-dom";
import "./App.css";
import SidBar from "./components/Sidbar/SidBar";
import TopBar from "./components/TopBar/TopBar";
import allRoutes from "./routes";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
function App() {
  let router = useRoutes(allRoutes);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsLoaded(true);
    }, 2000);
  });
  return (
    <div className="font-vazir">
      <TopBar />
      <div className="flex gap-3 ">
        <div className="fixed">

          <SidBar />
        </div>
        <div className="absolute right-60 mt-24">
          {isloaded ? router : <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default App;
