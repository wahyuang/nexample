import { animate, motion } from "framer-motion";

const BlueScreen = {
  init: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const animTitle = {
  init: {
    y: "100%",
  },
  animate: {
    y: [100, 0, 0, -100],
    transition: {
      duration: 2,
      times: [0, 0.3, 0.7, 1],
    },
  },
};

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-screen text-white bg-sky-500 z-[999]"
      variants={BlueScreen}
      initial="init"
      animate="animate"
      exit="exit"
      onTransitionEnd={(ab) => {
        console.log(ab);
      }}
      onAnimationStart={() => document.body.classList.add(`overflow-hidden`)}
      onAnimationComplete={() => {
        document.body.classList.remove(`overflow-hidden`);
      }}
    >
      <div className="overflow-hidden">
        <motion.div className="text-4xl font-bold" variants={animTitle}>
          NEXAMPLE
        </motion.div>
      </div>
    </motion.div>
  );
}
