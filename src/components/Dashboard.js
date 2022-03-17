import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.1,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Dashboard = () => {
  return (
    <div class="relative w-full">
      <div class="dark:hidden absolute -top-0 left-40 sm:-top-20 sm:left-40 lg:left-60 w-1/2 h-1/2 sm:h-96  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="dark:hidden absolute top-0 left-6 sm:-left-16 sm:top-10 w-1/2 h-1/2 sm:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="dark:hidden absolute bottom-1 right-4 sm:-right-16 sm:bottom-10 w-1/2 sm:h-96 h-1/2 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="dark:hidden absolute bottom-1 sm:-bottom-40 sm:left-40 lg:left-60 w-1/2 h-1/2 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <motion.div
        id="Dashboard"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="isolate"
      >
        <motion.div
          variants={containerVariants}
          className="dark:text-indigo-500 text-indigo-600 text-2xl sm:text-3xl font-bold"
        >
          Hey there! My name&#39;s
        </motion.div>
        <motion.div
          variants={containerVariants}
          className=" dark:text-white text-black text-6xl sm:text-8xl lg:text-9xl font-bold"
        >
          Sumit Mittal.
        </motion.div>
        <motion.div
          variants={childVariants}
          className=" dark:text-white text-black text-2xl sm:text-3xl font-medium sm:font-bold pt-10"
        >
          Software Engineer.{" "}
          <span className="text-gray-700 dark:text-indigo-500 text-2xl text-center sm:text-3xl font-medium sm:font-bold pt-10 ">
            A Full Stack Developer with an interest in Functional Programming.
          </span>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="dark:text-gray-400 text-black flex flex-row text-md md:text-lg lg:text-2xl font-md md:font-lg lg:font-xl pt-10"
        >
          <motion.div
            className="text-4xl my-auto"
            whileHover={{
              scale: [1, 3, 3, 3, 1],
              rotate: [0, 0, 270, 360, 360],
            }}
          >
            🚀
          </motion.div>

          <div className="ml-5 mt-1 text-center font-semibold text-xl sm:text-2xl">
            Currently exploring new opportunities and working on some side
            projects.
          </div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="pt-10 flex flex-wrap justify-center sm:justify-start gap-4 flex-row space-x-3 mb-3"
        >
          <a href="https://github.com/Sumit2202">
            <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 10px rgba(255, 255, 255)",
                boxShadow: "0px 0px 10px rgba(255, 255, 255)",
              }}
              whileTap={{ scale: 0.8 }}
              type="button"
              className="inline-flex justify-around h-12 w-32 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                alt="github-link"
                className="w-8 h-8"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
              />
              <span className="ml-2 font-md text-base sm:text-lg">Github</span>
            </motion.button>
          </a>
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
              <span className="ml-2 font-md text-base sm:text-lg">
                LinkedIn
              </span>
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
