import { useEffect } from "react";
import About from "./About";
import Dashboard from "./Dashboard";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className=" max-w-6xl lg:max-w-6xl mx-auto md:mt-8 p-4 md:p-14 flex flex-col text-white">
        <Dashboard />
        <About />
      </div>
    </>
  );
};

export default Home;
