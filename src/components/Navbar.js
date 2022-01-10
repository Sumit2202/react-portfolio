import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { MobileMenu } from "./MobileMenu";
import { Link, animateScroll as scroll } from "react-scroll";

const initialNavigation = [
  { name: "Dashboard" },
  { name: "About" },
  { name: "Projects" },
];

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`sticky top-0 z-1 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-gray-300 dark:bg-black ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="sticky max-w-6xl lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 pb-4 border-b-0">
        <div className="relative flex justify-between h-16">
          <div className="absolute pt-10 inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 pt-6 flex items-center justify-end sm:items-stretch sm:justify-between">
            <div className="hidden sm:flex sm:space-x-2">
              {initialNavigation.map((item) => (
                <Link
                  activeClass="dark:text-white text-black"
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={
                    " text-gray-500 px-5 p-3 inline-flex items-center rounded-md md:text-xl text-md font-medium hover:bg-gray-200 hover:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute pt-1  right-0 flex justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="pt-4">
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
    </div>
  );
};

export default Navbar;
