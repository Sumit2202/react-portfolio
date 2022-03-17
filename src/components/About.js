import { motion } from "framer-motion";
import RevealOnScrollHOC from "./RevealOnScrollHOC";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mt-10 mb-10">
      <div className="text-black dark:text-white text-lg ">
        <h1 className="flex gap-2 font-bold mb-4 text-4xl">
          <motion.div
            whileHover={{
              scale: [1, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
          >
            ⚡
          </motion.div>
          About Me
        </h1>
        <span className="block mb-5 font-semibold ">
          My primary expertise lies in JavaScript - ES6+, React, TypeScript,
          Node.js, GraphQL, Postgres, Neo4j(Graph DB), SQL Server,
          RxJs(Observables).
        </span>
        <span className="block mb-5 font-semibold">
          Currently I am diving into the Functional paradigm of programming, I
          have been using JavaScript and dabbling around with pure functions,
          monads and shifting to a much more declarative style of functional and
          reactive programming.
        </span>
        <span className="block mb-5 font-semibold">
          I am a strong advocate of functional programming and believe in making
          functions a first class citizens!
        </span>
        <span className="block mb-5 font-semibold">
          I also love sports, biking and I am an outdoor enthusiast.
        </span>
      </div>
      <motion.div
        className="m-auto pt-0"
        whileHover={{
          scale: 1.1,
        }}
      >
        <video className="rounded-lg" preload="auto" muted loop autoPlay>
          <source src="https://cdnl.iconscout.com/lottie/premium/thumb/man-coding-on-laptop-4337847-3618984.mp4" />
        </video>
      </motion.div>
    </div>
  );
};

const AboutSectionFooter = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="m-auto font-bold block text-4xl md:text-5xl text-black dark:text-white">
        Let's Get in Touch
      </span>
      <div className="m-auto flex space-x-6 mb-3">
        <a href="https://www.linkedin.com/in/sumit-mittal22/">
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255, 255, 255)",
            }}
            whileTap={{ scale: 0.8 }}
            type="button"
            className="inline-flex justify-around h-12 w-36 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              alt="linkedIn-link"
              className="w-8 h-8"
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            />
            <span className="ml-2 font-md text-base sm:text-lg">LinkedIn</span>
          </motion.button>
        </a>
        <a href="mailto:sumit22mittal@gmail.com">
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255, 255, 255)",
            }}
            whileTap={{ scale: 0.8 }}
            type="button"
            className="inline-flex justify-around h-12 w-32 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              alt="email-link"
              className="w-8 h-8"
              src="https://img.icons8.com/ios-filled/50/000000/mail.png"
            />
            <span className="ml-2 font-md text-base sm:text-lg">E-mail</span>
          </motion.button>
        </a>
      </div>
      <span className="px-20 text-center m-auto font-semibold md:font-bold block text-md sm:text-2xl text-black dark:text-white">
        Built with ❤️ using React, Tailwind and Framer Motion
      </span>
    </div>
  );
};

const About = () => {
  return (
    <div className="pt-5 flex flex-col gap-28" id="About">
      <RevealOnScrollHOC Component={AboutSection} />
      <RevealOnScrollHOC Component={AboutSectionFooter} />
    </div>
  );
};

export default About;
