import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""} `}>
      <div className="dark:bg-black bg-slate-50">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
      </div>
    </div>
  );
}

export default App;
