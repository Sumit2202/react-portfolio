const About = () => {
  return (
    <>
      <div
        id="About"
        className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mt-20"
      >
        <div className="text-black dark:text-white">
          <h1 className="font-bold mb-4 text-xl"> ⚡ About Me</h1>
          <span className="block mb-5">
            My primary expertise lies in JavaScript - ES6+, React, TypeScript,
            Node.js, GraphQL, Postgres, Neo4j(Graph DB), MongoDB, SQL Server,
            RxJs(Observables).
          </span>
          <span className="block mb-5">
            Currently I am diving into the Functional paradigm of programming, I
            have been using JavaScript and dabbling around with pure functions,
            monads and shifting to a much more declarative style of functional
            and reactive programming. I am a strong advocate of functional
            programming and believe in making functions a first class citizens!
          </span>
          <span className="block mb-5">
            I also love music, photography, great outdoors and am a sports
            enthusiast.
          </span>
        </div>
        <img
          className="m-auto w-1/2 lg:w-11/12 rounded-xl"
          src="./aboutMe.png"
          alt="aboutMe"
        />
      </div>
      <div className="m-5 md:m-10 lg:m-20 p-5 md:p-10 lg:p-20 flex flex-col space-y-7">
        <span className="m-auto font-bold block text-4xl md:text-5xl text-black dark:text-white">
          Let's Get in Touch
        </span>
        <div className="m-auto flex space-x-6 mb-3">
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
        <span className="m-auto font-semibold md:font-bold block text-md md:text-xl text-black dark:text-white">
          Built with ❤️ using React and Tailwind css
        </span>
      </div>
    </>
  );
};

export default About;
