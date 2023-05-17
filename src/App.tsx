import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Graph from "./components/Graph";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ width: "100vw", height: "100vh", border: 'solid black 3px' }}>
        <Graph />
    </div>
  );
}

export default App;
