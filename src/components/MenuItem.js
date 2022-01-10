import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  return (
    <motion.li
      className="mobile-menu-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <a
        href={item.name === "Dashboard" ? "/" : item.name}
        className="text-placeholder text-center mb-2 pb-10 border-b-2 font-md dark:text-gray-900 text-black"
      >
        {item.name}
      </a> */}
      <Link
        activeClass="dark:text-white text-black"
        to={item.name}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={
          " text-placeholder text-center mb-2 pb-10 border-b-2 font-md dark:text-gray-900 text-black"
        }
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </Link>
    </motion.li>
  );
};
