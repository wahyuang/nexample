import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const SplashContext = createContext({
  isFirstMount: true,
});

export const SplashContextWrapper = ({ children }: { children: ReactNode }) => {
  const [isFirstMount, setFirstMount] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => isFirstMount && setFirstMount(false);

    router.events.on(`routeChangeStart`, handleRouteChange);

    return () => router.events.off(`routeChangeStart`, handleRouteChange);
  }, []);

  const value = { isFirstMount: isFirstMount };

  return (
    <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
  );
};

export const useSplashContext = () => {
  return useContext(SplashContext);
};
