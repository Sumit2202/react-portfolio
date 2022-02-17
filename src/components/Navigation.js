import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const initialNavigation = [
  { name: "Dashboard" },
  { name: "About" },
  { name: "Projects" },
];

export const Navigation = () => (
  <motion.ul
    className="navigation flex flex-col justify-between"
    variants={variants}
  >
    {initialNavigation.map((i) => (
      <MenuItem item={i} key={i.name} />
    ))}
  </motion.ul>
);
