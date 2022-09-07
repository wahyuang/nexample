import "@/styles/app.css";
import type { AppProps } from "next/app";
import { MobileMenuWrapper } from "@/context/MobileMenu";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MobileMenuWrapper>
  );
}

export default MyApp;
