import "@/styles/app.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { MobileMenuWrapper } from "@/context/MobileMenu";
import Layout from "@/components/layout";
import { AnimatePresence } from "@/components/framer/AnimatePresence";
import { useRouter } from "next/router";
import { SplashContextWrapper } from "@/context/SplashContext";

export const metadata = {
  title: "Nexample",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider>
          <MobileMenuWrapper>
            <SplashContextWrapper>
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </SplashContextWrapper>
          </MobileMenuWrapper>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
