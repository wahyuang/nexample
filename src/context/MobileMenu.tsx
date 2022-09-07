import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

interface IMobileMenuContext {
  isMobileMenuOpen: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<IMobileMenuContext>({
  isMobileMenuOpen: false,
  setMobileMenu: () => false,
});

export const MobileMenuWrapper = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const value = {
    isMobileMenuOpen,
    setMobileMenu,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileContext = () => {
  return useContext(MobileMenuContext);
};
