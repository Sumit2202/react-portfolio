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

const transferFeatures = [
  {
    id: 1,
    name: "Web Stack Explanation",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: SiFuturelearn,
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="lg:space-x-6 mt-20">
      <div className="text-black dark:text-white">
        <h2 className="font-bold mb-4 text-4xl">
          <h1 className="flex gap-2 font-bold mb-4 text-4xl">
            <motion.div
              whileHover={{
                scale: [1, 3, 3, 1, 1],
                rotate: [0, 0, 270, 270, 0],
              }}
            >
              ✏️
            </motion.div>
            Projects
          </h1>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16">
          <dl className="mt-10 px-2 space-y-10 order-last lg:order-first">
            {transferFeatures.map((item) => (
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
                <dd className="mt-2 ml-16 text-base  dark:text-gray-500">
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
                  className="relative mx-auto rounded-xl"
                  width={490}
                  height={50}
                  src="https://images.unsplash.com/photo-1611343693811-2c235c683f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80"
                  alt=""
                />
              </motion.div>

              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-medium text-black dark:text-white">
                    Wordle
                  </h2>
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="http://google.com"
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
                      href="http://google.com"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-1 flex pb-4 border-b-2 border-grey-200 gap-2">
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
                <div className="py-4 dark:text-gray-500">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 mb-16">
          <dl className="mt-5 px-2 space-y-10 order-last">
            {transferFeatures.map((item) => (
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
                <dd className="mt-2 ml-16 text-base  dark:text-gray-500">
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
                  className="relative mx-auto rounded-xl"
                  width={490}
                  height={50}
                  src="https://images.unsplash.com/photo-1611343693811-2c235c683f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-medium text-black dark:text-white">
                    Vroom Car Rental
                  </h2>
                  <div className="flex gap-6 ">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="http://google.com"
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
                      href="http://google.com"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-1 flex flex-wrap pb-4 border-b-2 border-grey-200 gap-2">
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
                <div className="py-4 dark:text-gray-500">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 ">
          <dl className="mt-10 px-2 space-y-10 order-last lg:order-first">
            {transferFeatures.map((item) => (
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
                <dd className="mt-2 ml-16 text-base  dark:text-gray-500">
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
                  className="relative mx-auto rounded-xl"
                  width={490}
                  height={50}
                  src="https://images.unsplash.com/photo-1611343693811-2c235c683f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-medium text-black dark:text-white">
                    Your Backcountry Fix
                  </h2>
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="http://google.com"
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
                      href="http://google.com"
                    >
                      <FaExternalLinkAlt aria-label="project link" size={28} />
                    </motion.a>
                  </div>
                </div>
                <div className="mt-1 flex pb-4 border-b-2 border-grey-200 gap-2 flex-wrap">
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
                      width={100}
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
                {/*  */}
                <div className="py-4 dark:text-gray-500">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
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
