import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false); ////bg-gradient-to-r from-pink-400 via-blue-600  to-cyan-500

  return (
    <div className={`App ${darkMode ? "dark" : ""} `}>
      <div className="dark:bg-gray-800">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
      </div>
    </div>
  );
}

export default App; //
