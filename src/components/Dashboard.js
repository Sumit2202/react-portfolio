const Dashboard = () => {
  return (
    <div id="Dashboard">
      <div className="dark:text-indigo-500 text-indigo-600 text-xl md:text-3xl font-bold">
        Hey there! My name&#39;s
      </div>
      <div className=" dark:text-white text-black text-5xl md:text-8xl lg:text-9xl font-bold">
        Sumit Mittal.
      </div>
      <div className=" dark:text-white text-black  text-xl md:text-3xl font-medium md:font-bold pt-10">
        Software Engineer.{" "}
        <span className="text-gray-500 text-xl md:text-3xl font-medium md:font-bold pt-10 ">
          A Full Stack Developer with an interest in Functional Programming.
        </span>
      </div>
      <div className="dark:text-gray-400 text-black  flex flex-row text-md md:text-lg lg:text-2xl font-md md:font-lg lg:font-xl pt-10">
        <div className="text-center pr-1">🚀</div>
        <div>
          Currently exploring new opportunities and working on some side
          projects.
        </div>
      </div>
      <div className="pt-10 flex flex-row space-x-3 mb-3">
        <a href="https://github.com/Sumit2202">
          <button
            type="button"
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              alt="github-link"
              className="w-5 h-5"
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
            />
            <span className="ml-2 font-md ">Github</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/sumit-mittal22/">
          <button
            type="button"
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              alt="linkedIn-link"
              className="w-5 h-5"
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            />
            <span className="ml-2 font-md ">LinkedIn</span>
          </button>
        </a>
        <a href="mailto:sumit22mittal@gmail.com">
          <button
            type="button"
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              alt="email-link"
              className="w-5 h-5"
              src="https://img.icons8.com/ios-filled/50/000000/mail.png"
            />
            <span className="ml-2 font-md">E-mail</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
