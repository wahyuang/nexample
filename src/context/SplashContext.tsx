"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface TSplashContext {
  isFirstMount: boolean;
  setFirstMount: Dispatch<SetStateAction<boolean>>;
}

const SplashContext = createContext<TSplashContext>({
  isFirstMount: true,
  setFirstMount: () => null,
});

export const SplashContextWrapper = ({ children }: { children: ReactNode }) => {
  const [isFirstMount, setFirstMount] = useState(true);

  const value = { isFirstMount, setFirstMount };

  return (
    <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
  );
};

export const useSplashContext = () => {
  return useContext(SplashContext);
};
