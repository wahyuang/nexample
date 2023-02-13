import { ButtonSolid } from "@/components/buttons";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative h-[55vh] p-10 rounded-md bg-sky-500 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 z-10 w-full h-full transform"
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.7,
          },
        }}
      >
        <Image
          src={`/images/hero-home.jpg`}
          className="absolute top-0 left-0 object-cover w-full h-full"
          alt="Hero Image"
          fill
        />
      </motion.div>
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-opacity-70 bg-sky-700"></div>
      <motion.div
        className="absolute z-30 w-1/2 text-white bottom-10 left-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        }}
      >
        <div className="text-2xl font-bold">NEXAMPLE</div>
        <div className="mt-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              incidunt.
            </p>
          </div>
          <div>
            <ButtonSolid href="/blog">Read more</ButtonSolid>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
