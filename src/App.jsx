import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <About />
    </>
  );
}

export default App;
