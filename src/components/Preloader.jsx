import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const words = ["Breath", "Relax", "Enjoy"];
  const [index, setIndex] = useState(0);
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval); // Ensure interval stops before exit
      setAnimateExit(true);
      setTimeout(onFinish, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen w-full"
      initial={{ opacity: 1, y: 0 }}
      animate={animateExit ? { y: "-100vh", opacity: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-8xl font-extrabold bg-clip-text text-transparent font-[Quicksand]"
        style={{
          background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        key={index}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
