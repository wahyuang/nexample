import Link from "next/link";
import AuthLink from "./auth-link";

const MainMenu = [
  { url: `/services`, title: `Services` },
  { url: `/blog`, title: `Blog` },
  { url: `/contact`, title: `Contact` },
  // { url: `/dashboard`, title: `Dashboard` },
];

const NavItem = ({ url, children }: { url: string; children: string }) => {
  return (
    <Link
      href={url}
      className="block px-4 py-2 text-sm text-gray-600 transition-all duration-300 bg-transparent rounded-md hover:bg-sky-500 hover:text-white hover:no-underline"
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        {MainMenu &&
          MainMenu.map((menu, index) => {
            const { url, title } = menu;
            return (
              <div key={`main-menu-${index}`}>
                <NavItem url={url}>{title}</NavItem>
              </div>
            );
          })}
        <AuthLink />
      </div>
    </div>
  );
};
