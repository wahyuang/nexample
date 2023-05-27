import "@/styles/app.css";
import ReCaptchaProvider from "@/components/recaptcha-provider";
import { MobileMenuWrapper } from "@/context/MobileMenu";
import { AnimatePresence } from "@/components/framer/animate-presence";
import { SplashContextWrapper } from "@/context/SplashContext";
import NextAuthProvider from "@/components/next-auth-provider";
import { GlobalProvider } from "@/context/global-context";
import { getGlobalData } from "@/libs/get-global-data";

export const metadata = {
  title: `Nexample`,
  description: `Welcome to Next.js`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData = await getGlobalData();

  return (
    <html lang="en">
      <body>
        <GlobalProvider data={{ ...globalData }}>
          <NextAuthProvider>
            <ReCaptchaProvider>
              <MobileMenuWrapper>
                <SplashContextWrapper>
                  <AnimatePresence mode="wait">{children}</AnimatePresence>
                </SplashContextWrapper>
              </MobileMenuWrapper>
            </ReCaptchaProvider>
          </NextAuthProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
