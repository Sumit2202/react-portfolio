import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { MobileMenu } from "./MobileMenu";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const initialNavigation = [
  { name: "Dashboard" },
  { name: "Projects" },
  { name: "About" },
];

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div
      style={{ zIndex: "1" }}
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1, type: "spring" }}
      className={`sticky top-0 border-b border-gray-200 bg-gray-300 dark:bg-black ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="pb-5 sticky sm:z-10 max-w-6xl lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 border-b-0">
        <div className="relative flex justify-between h-16">
          <div className="absolute pt-10 inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 pt-6 flex items-center justify-end sm:items-stretch sm:justify-between">
            <div className="hidden sm:flex sm:space-x-2">
              {initialNavigation.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    key={index}
                    to={item.name}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={250}
                    className={
                      "cursor-pointer text-gray-500 dark:text-gray-400 px-5 p-3 inline-flex items-center rounded-md md:text-xl text-md font-medium hover:bg-gray-200 hover:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
                    }
                    activeClass="dark:!text-white !text-black"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.button>
              ))}
            </div>
          </div>
          <div className="absolute pt-1  right-0 flex justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="pt-5">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="px-2 space-y-1">
          <MobileMenu />
        </div>
        <div />
      </div>
    </motion.div>
  );
};

export default Navbar;
