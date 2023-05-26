"use client";

import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { SideMenu } from "./mobile";
import { motion } from "framer-motion";
import SplashScreen from "@/components/animations/splash-screen";
import { useSplashContext } from "@/context/SplashContext";

const content = (isFirstMount: boolean) => ({
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

export default function Layout({ children }: { children: ReactNode }) {
  const { isFirstMount } = useSplashContext();

  return (
    <>
      {isFirstMount && <SplashScreen />}
      <Header />
      <motion.main
        initial="init"
        animate="animate"
        exit="exit"
        variants={content(isFirstMount)}
      >
        <div className="container pb-5 pt-14">{children}</div>
      </motion.main>
      <Footer />
      <SideMenu />
    </>
  );
}
