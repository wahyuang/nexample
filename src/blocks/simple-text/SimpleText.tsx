import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export const SimpleText = () => {
  return (
    <motion.div
      className="py-12"
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="flex justify-center">
        <div className="w-full text-center md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-sky-500">
              Nexample Project
            </h2>
          </div>
          <div className="mt-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, optio labore, saepe sint modi inventore atque
              consequuntur velit, id facilis sunt sed minus quidem cupiditate ea
              corrupti et illum unde.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center justify-center hover:text-sky-500 group"
              >
                Our Services{" "}
                <BsArrowRight className="ml-2 transition-all duration-300 group-hover:ml-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
