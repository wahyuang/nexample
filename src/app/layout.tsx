import "@/styles/app.css";
import ReCaptchaProvider from "@/components/recaptcha-provider";
import { MobileMenuWrapper } from "@/context/MobileMenu";
import { AnimatePresence } from "@/components/framer/animate-presence";
import { SplashContextWrapper } from "@/context/SplashContext";
import NextAuthProvider from "@/components/next-auth-provider";

export const metadata = {
  title: `Nexample`,
  description: `Welcome to Next.js`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ReCaptchaProvider>
            <MobileMenuWrapper>
              <SplashContextWrapper>
                <AnimatePresence mode="wait">{children}</AnimatePresence>
              </SplashContextWrapper>
            </MobileMenuWrapper>
          </ReCaptchaProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
