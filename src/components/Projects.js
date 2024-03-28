import { GlobeAltIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFuturelearn,
} from "react-icons/si";

const backcountryFeatures = [
  {
    id: 1,
    name: "Stack Explanation",
    description:
      "In recent years, there have been many innovations in building a cross-platform mobile app. Kotlin Multiplatform is another example built by JetBrains, and I wanted to take a stab at it and learn some Kotlin, too, on the way. I built this app to explore this area. It is incredible how KMM can share business logic code between iOS and Android (with Kotlin Native running on iOS) while building UIs using platform-specific libraries like SwiftUI and Jetpack Compose.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
      "There's a bit of a learning curve coming from a JS background, but I believe to be a good mobile developer, everyone should get their hands dirty with native Android/iOS development to truly understand how something works and why it is not working as expected.",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "Along the way, I learnt a lot about native mobile development, how view models manage state, how Kotlin flows and suspend functions manage concurrency, and how MVVM architecture works.",
    icon: SiFuturelearn,
  },
];

const vroomFeatures = [
  {
    id: 1,
    name: "Stack Explanation",
    description:
    "Todo-real-time is a real-time and offline-first to-do mobile app for Android and iOS built using react-native and Firebase. It syncs data in real time across multiple devices, so you can 'jump' between devices without worrying about syncing.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Problems and Thought Process",
    description:
    "I built this to learn more about Firestore and its underlying database, Spanner. Google's Firestore is a NoSQL serverless database with real-time notification capability. I was intrigued to know how FireStore is highly consistent and available simultaneously, breaking the chains of the CAP theorem. (Note: Spanner is technically a CP system, but with more than five 9s of availability, I think it well deserves the title of being Highly consistent and Highly available)",
    icon: FaBrain,
  },
  {
    id: 3,
    name: "Lessons Learned",
    description:
      "Firebase rocks!! From Authentication to a complete NoSQL DB synced to the user's device, Firebase does it all.",
    icon: SiFuturelearn,
  },
];

const wordleFeatures = [
  {
    id: 1,
    name: "Stack Explanation",
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
        {/* Kotlin kmm movie browser */}
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
                  <p className="ml-16 text-xl text-gray-800 dark:text-white leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold text-gray-500 dark:text-gray-500">
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
                  className="relative mx-auto rounded-xl border-gray-500 border-2 h-84"
                  width={490}
                  src="./moviebrowser.png"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    Kotlin Multiplatform Movie Browser
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
                      href="https://github.com/Sumit2202/kotlinMultiplatform-movie-browser"
                    >
                      <FaGithub aria-label="github" size={28} />
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
                    href="https://kotlinlang.org/docs/multiplatform.html"
                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <img
                      className="h-8 rounded-full"
                      width={45}
                      src="https://www.staffworx.co.uk/wp-content/uploads/2020/12/kotlin-logo-3.jpg"
                      alt=""
                    />
                    Kotlin Multiplatform
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://developer.android.com/develop/ui/compose"
                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <img
                      className="h-8 w-10 mr-1 rounded-full"
                      width={75}
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png"
                      alt=""
                    />
                    Jetpack Compose
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://ktor.io/docs/getting-started-ktor-client-multiplatform-mobile.html"
                    className=" text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <img
                      className="h-8 w-10 mr-1 rounded-full"
                      width={75}
                      src="https://pbs.twimg.com/profile_images/1305803851832975360/CAZ9uIaH_400x400.jpg"
                      alt=""
                    />
                    Ktor
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://arkivanov.github.io/Decompose/"
                    className="h-10 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-pink-100 text-pink-600 rounded-full"
                  >
                    <img
                      className="h-8 w-10 mr-1 rounded-full"
                      width={75}
                      src="https://arkivanov.github.io/Decompose/media/logo/circle-2.png"
                      alt=""
                    />
                    Decompose
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://kotlinlang.org/docs/coroutines-overview.html"
                    className="h-10 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-800 text-cyan-300 rounded-full"
                  >
                    <img
                      className="h-8 rounded-full"
                      width={45}
                      src="https://www.staffworx.co.uk/wp-content/uploads/2020/12/kotlin-logo-3.jpg"
                      alt=""
                    />
                    Kotlin Coroutines
                  </motion.a>
                  
                </div>
                {/* Description */}
                <div className="py-4 dark:text-gray-500 text-gray-800 font-semibold">
                  A cross platform mobile app for browsing movies, built with KMM, Kotlin, Ktor and decompose.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offline-Sync Real time Todo  */}
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
                  <p className="ml-16 text-gray-800 text-xl dark:text-white leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold text-gray-500 dark:text-gray-500">
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
                  className="relative mx-auto rounded-xl border-gray-500 border-2 h-84"
                  width={490}
                  height={50}
                  src="./TodosRealtime.png"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col px-6 py-4">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    Todo Real Time
                  </h2>
                  {/* External links */}
                  {/* Reactive, Realtime, Local-First */}
                  <div className="flex gap-6 ">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 10px rgba(255, 255, 255)",
                      }}
                      whileTap={{ scale: 0.8 }}
                      alt="github"
                      href="https://github.com/Sumit2202/todo-real-time"
                    >
                      <FaGithub aria-label="github" size={28} />
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
                    href="https://expo.dev/"
                    className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-400 rounded-full"
                  >
                    <img
                      className="mr-1 rounded-full"
                      width={30}
                      height={35}
                      src="https://miro.medium.com/v2/resize:fit:1200/1*M4W1zKMuf0xmAcZwZgUcTQ.png"
                      alt=""
                    />
                    Expo
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
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://firebase.google.com/docs/firestore"
                    className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-400 rounded-full"
                  >
                    <img
                      className="mr-1 rounded-full"
                      width={25}
                      height={30}
                      src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
                      alt=""
                    />
                    Firebase Firestore
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 10px rgba(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    href="https://firebase.google.com/docs/auth"
                    className="text-xs text-center inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-400 rounded-full"
                  >
                    <img
                      className="mr-1 rounded-full"
                      width={25}
                      height={30}
                      src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
                      alt=""
                    />
                    Firebase Auth
                  </motion.a>
                </div>
                {/* Description */}
                <div className="py-4 font-semibold text-gray-800  dark:text-gray-500">
                  A screenshot showcasing a React Native app for keeping a list of Todos,
                  accross devices, built with React Native,Expo, React Native Paper, and Firebase.
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
                  <p className="ml-16 text-gray-800 dark:text-white text-xl leading-6 font-bold ">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-semibold text-gray-500 dark:text-gray-500">
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
                <div className="py-4 font-semibold text-gray-800  dark:text-gray-500">
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
