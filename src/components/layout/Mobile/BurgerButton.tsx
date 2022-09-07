import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMobileContext } from "@/context/MobileMenu";

export const BurgerButton = () => {
  const { setMobileMenu } = useMobileContext();

  return (
    <div className="block md:hidden">
      <button
        className="w-10 h-10 text-3xl text-center border-0 text-sky-500"
        onClick={() => setMobileMenu(true)}
      >
        <HiOutlineMenuAlt2 className="mx-auto" />
      </button>
    </div>
  );
};
