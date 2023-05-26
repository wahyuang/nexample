import { BurgerButton } from "../Mobile";
import Navbar from "@/components/layout/Navbar";
import Logo from "./logo";

export function Header() {
  return (
    <div className="relative py-4 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
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
