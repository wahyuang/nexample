import { BurgerButton } from "../mobile";
import Navbar from "@/components/layout/navbar";
import Logo from "./logo";
import LoginButton from "./login-button";

export function Header() {
  return (
    <div className="relative py-4 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="pr-4 ml-auto md:hidden">
            <LoginButton />
          </div>
          <div>
            <Navbar />
            <BurgerButton />
          </div>
        </div>
      </div>
    </div>
  );
}
