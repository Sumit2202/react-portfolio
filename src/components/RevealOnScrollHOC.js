import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    },
  },
};

const RevealOnScrollHOC = ({ Component }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const animate = async () => {
      await controls.start(containerVariants.hidden);
      await controls.start(containerVariants.visible);
    };

    if (inView) animate();
  }, [controls, inView]);

  return (
    <section ref={ref}>
      <motion.div animate={controls}>
        <Component />
      </motion.div>
    </section>
  );
};

export default RevealOnScrollHOC;
