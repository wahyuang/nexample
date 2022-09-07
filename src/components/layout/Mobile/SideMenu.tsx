import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { useMobileContext } from "@/context/MobileMenu";

const Overlay = ({ isShow = false }: { isShow?: boolean }) => {
  return (
    <div
      className={`${
        isShow ? `fixed` : `hidden`
      } top-0 left-0 w-full h-screen bg-slate-800 bg-opacity-40 z-40`}
    ></div>
  );
};

const CloseButton = () => {
  const { setMobileMenu } = useMobileContext();

  return (
    <div className="absolute top-4 right-4">
      <button
        className="flex items-center justify-center w-10 h-10 text-3xl text-white"
        onClick={() => setMobileMenu(false)}
      >
        <RiCloseFill className="mx-auto" />
      </button>
    </div>
  );
};

const MainMenu = [
  { url: `/services`, title: "Services" },
  { url: `/blog`, title: "Blog" },
  { url: `/contact`, title: "Contact" },
];

export const SideMenu = () => {
  const { isMobileMenuOpen, setMobileMenu } = useMobileContext();

  return (
    <>
      <Overlay isShow={isMobileMenuOpen} />
      <div
        className={`${
          isMobileMenuOpen ? `translate-x-0` : `translate-x-full`
        } transform fixed top-0 right-0 w-[300px] h-screen text-white bg-sky-500 z-50 transition-all duration-500`}
      >
        <CloseButton />
        <div className="py-20 px-7">
          {MainMenu && (
            <div className="space-y-8">
              {MainMenu.map((menu, index) => {
                const { url, title } = menu;
                return (
                  <div key={`side-menu-item-${index}`}>
                    <Link href={url}>
                      <a onClick={() => setMobileMenu(false)}>{title}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
