import "@/styles/app.css";
import type { AppProps } from "next/app";
import { MobileMenuWrapper } from "@/context/MobileMenu";
import Layout from "@/components/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SplashContextWrapper } from "@/context/SplashContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <MobileMenuWrapper>
      <SplashContextWrapper>
        <AnimatePresence exitBeforeEnter>
          <Layout key={router.asPath}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </SplashContextWrapper>
    </MobileMenuWrapper>
  );
}

export default MyApp;
