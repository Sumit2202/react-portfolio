import About from "./About";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
const Home = () => {
  return (
    <>
      <div className=" max-w-6xl lg:max-w-6xl mx-auto md:mt-8 p-8 md:p-14 flex flex-col text-white">
        <Dashboard />
        <Projects />
        <About />
      </div>
    </>
  );
};

export default Home;
