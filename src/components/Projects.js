import { GlobeAltIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFuturelearn,
  SiGraphql,
  SiHasura,
  SiServerless,
  SiAuth0,
} from "react-icons/si";

const backcountryFeatures = [
  {
    id: 1,
    name: "Web Stack Explanation",
    description:
      "React and Remix were my choice for building the frontend, It gave me an opportunity to learn about Remix, being a relatively new React Framework. For the backend I chose Serverless (Hasura) for its flexibility and ease of use.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
      "I built this because in the past, I had faced difficulties finding a website which sells camping supplies and outdoor gear.",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "I got a chance to learn about the backend and serverless architecture. It also enabled me in understanding all the pieces of the stack and how they work together.",
    icon: SiFuturelearn,
  },
];

const vroomFeatures = [
  {
    id: 1,
    name: "Web Stack Explanation",
    description:
      "Wanting to build a cross platform mobile app, I chose React Native coming from having past experience using React. To make it feel like native I used React Native Paper which is a material design comoponent library for React Native.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
      "At the time I started building this app was because of not being able to rent cars (within Canada) via other platforms like Turo (Due to thier recent age restriction for all renters). From then I researched and found many other ways to make the whole car rental process easier and more accessible. Checkout the demo site showcasing the app and few other ideas around it.",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "With this project I got a chance to learn about mobile development and React Native. I also learned about various mobile UI components like BottomSheet, Navigational components and how to use each one of them.",
    icon: SiFuturelearn,
  },
];

const wordleFeatures = [
  {
    id: 1,
    name: "Web Stack Explanation",
    description:
      "I built this Game using React and TailwindCSS, I had a lot of fun builing this game.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
      "I was intrigued by the wordle game and wanted to challenge myself into build one.",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "I took this opportunity to learn more about Functional Programming and how it can be used within different React components. I also learned some cool animation and motion effects.",
    icon: SiFuturelearn,
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="lg:space-x-6 mt-20 xl:mt-28">
      <div className="text-black dark:text-white">
        <h2 className="flex gap-2 font-bold mb-4 text-4xl">
          <motion.div
            whileHover={{
              scale: [1, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
          >
            ✏️
          </motion.div>
          Projects
        </h2>
        {/* Your Backcountry Fix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16">
          <dl className="mt-10 px-2 space-y-10 order-last lg:order-first">
            {backcountryFeatures.map((item) => (
              <div key={item.id} className="relative">
                <dt>
                  <motion.div
                    whileHover={{
                      scale: "1.2",
                    }}
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-xl leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold dark:text-gray-500">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="flex px-6 flex-col rounded-xl">
              <motion.div
                className="m-auto lg:w-11/12"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <img
                  className="relative mx-auto rounded-xl border-gray-500 border-2 h-64"
                  width={490}
                  src="./backcountryFix.png"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    Your Backcountry Fix
                  </h2>
                  {/* links */}
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="https://github.com/CodeBrewerz/your-backcountry-fix"
                    >
                      <FaGithub aria-label="github" size={28} />
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="external link"
                      href="https://your-backcountry-fix.fly.dev"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                {/* Tags */}
                <div className="mt-3 flex pb-4 border-b-2 border-grey-200 gap-2 flex-wrap">
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://reactjs.org/"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-900 text-cyan-400 rounded-full"
                  >
                    <FaReact className="mr-1" aria-label="React" size={20} />
                    React
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://remix.run/"
                  >
                    <img
                      className="h-8 mr-1 rounded-full"
                      width={75}
                      src="https://remix.run/img/og.1.jpg"
                      alt=""
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://tailwindcss.com/"
                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <SiTailwindcss
                      className="mr-1"
                      aria-label="React"
                      size={20}
                    />
                    Tailwind
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://graphql.org/"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-pink-100 text-pink-600 rounded-full"
                  >
                    <SiGraphql
                      className="mr-1"
                      aria-label="graphQL"
                      size={20}
                    />
                    GraphQL
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://hasura.io/"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-cyan-100 text-cyan-600 rounded-full"
                  >
                    <SiHasura className="mr-1" aria-label="hasura" size={20} />
                    Hasura
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://github.com/expressjs/express"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-green-400 rounded-full"
                  >
                    <FaCode className="mr-1" aria-label="NodeJS" size={20} />
                    Node Express Server
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://nhost.io/"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-blue-700 text-black rounded-full"
                  >
                    <SiServerless
                      className="mr-1"
                      aria-label="NHost"
                      size={20}
                    />
                    NHost
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://stripe.com/en-ca"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-sky-600 rounded-full"
                  >
                    <FaStripe className="mr-1" aria-label="Stripe" size={55} />
                  </motion.a>
                </div>
                {/* Description */}
                <div className="py-4 dark:text-gray-500 font-semibold">
                  A Full Stack E-Commerce platform for buying camping and
                  outdoor gear. Built with Stripe, Hasura, NHost, and GraphQL
                  for the backend and React, Remix for the frontend. Tailwind
                  css for styling and reponsive layout.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vroom Product Site */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16">
          <dl className="mt-5 px-2 space-y-10 order-last">
            {vroomFeatures.map((item) => (
              <div key={item.id} className="relative">
                <dt>
                  <motion.div
                    whileHover={{
                      scale: "1.2",
                    }}
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-xl leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold dark:text-gray-500">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="-mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="flex px-6 flex-col rounded-xl">
              <motion.div
                className="m-auto lg:w-11/12"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <img
                  className="relative mx-auto rounded-xl border-gray-500 border-2 h-64"
                  width={490}
                  height={50}
                  src="./vroom.png"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    Vroom
                  </h2>
                  {/* External links */}
                  <div className="flex gap-6 ">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="https://github.com/CodeBrewerz/vroom-product-site"
                    >
                      <FaGithub aria-label="github" size={28} />
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="project link"
                      href="https://vroom-product-site.vercel.app/"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                {/* Tags */}
                <div className="mt-3 flex flex-wrap pb-4 border-b-2 border-grey-200 gap-2">
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://reactnative.dev/"
                    className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-900 text-cyan-400 rounded-full"
                  >
                    <FaReact className="mr-1" aria-label="React" size={20} />
                    React Native
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://reactnativepaper.com/"
                    className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-300 text-indigo-700 rounded-full"
                  >
                    <img
                      className="mr-1 rounded-full"
                      width={25}
                      height={20}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWIvXFPHRG_qLo01aWNpBL_ZDqlofoOLlgQ&usqp=CAU"
                      alt=""
                    />
                    React Native Paper
                  </motion.a>
                  <motion.a
                    href="https://stripe.com/en-ca"
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-sky-600 rounded-full"
                  >
                    <FaStripe className="mr-1" aria-label="Stripe" size={55} />
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://auth0.com/"
                    className="h-8 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-orange-500 rounded-full"
                  >
                    <SiAuth0 className="mr-1" aria-label="Auth0" size={20} />{" "}
                    Auth0
                  </motion.a>
                </div>
                {/* Description */}
                <div className="py-4 font-semibold dark:text-gray-500">
                  A demo site showcasing a React Native application for renting
                  cars, built with React Native, React Native Paper, and Stripe.
                  Authentication via Auth0.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wordle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16 mt-20">
          <dl className="mt-10 px-2 space-y-10 order-last lg:order-first">
            {wordleFeatures.map((item) => (
              <div key={item.id} className="relative">
                <dt>
                  <motion.div
                    whileHover={{
                      scale: "1.2",
                    }}
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-xl leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold dark:text-gray-500">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="flex px-6 flex-col rounded-xl">
              <motion.div
                className="m-auto lg:w-11/12"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <img
                  className="relative mx-auto rounded-xl border-gray-500 border-2 h-64"
                  width={490}
                  src="./wordle.png"
                  alt=""
                />
              </motion.div>

              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    Wordle
                  </h2>
                  {/* links */}
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="https://github.com/CodeBrewerz/wordle"
                    >
                      <FaGithub aria-label="github" size={28} />
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="external link"
                      href="https://react-fp-wordle.vercel.app"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                {/* Tags */}
                <div className="mt-3 flex pb-4 border-b-2 border-grey-200 gap-2">
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://reactjs.org/"
                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-900 text-cyan-400 rounded-full"
                  >
                    <FaReact className="mr-1" aria-label="React" size={20} />
                    React
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://tailwindcss.com/"
                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <SiTailwindcss
                      className="mr-1"
                      aria-label="React"
                      size={20}
                    />
                    Tailwind
                  </motion.a>
                </div>
                {/* Description */}
                <div className="py-4 font-semibold dark:text-gray-500">
                  A wordle Clone built using React and Tailwind CSS. State
                  Management via Hooks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
