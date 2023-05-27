"use client";

import { GlobalData } from "@/types/global-data";
import { createContext, useContext, ReactNode } from "react";

const GlobalContext = createContext<GlobalData>({
  MainMenu: {
    data: [],
  },
});

const GlobalProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: GlobalData;
}) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
