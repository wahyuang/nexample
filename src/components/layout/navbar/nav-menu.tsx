"use client";

import { useGlobalContext } from "@/context/global-context";
import Link from "@/components/link";
import { formatLink } from "@/utils/common";

const NavItem = ({ url, children }: { url: string; children: string }) => {
  return (
    <Link
      href={formatLink(url)}
      className="block px-4 py-2 text-sm text-gray-600 transition-all duration-300 bg-transparent rounded-md hover:bg-sky-500 hover:text-white hover:no-underline"
    >
      {children}
    </Link>
  );
};

export default function NavMenu() {
  const { MainMenu } = useGlobalContext();
  const navItems = MainMenu.data.length ? MainMenu.data : [];

  return (
    <>
      {navItems.map((item, index) => {
        const { title, url, page_item } = item.attributes;
        const relation = page_item.data;
        const menuURL = relation ? `/${relation.attributes.slug}` : url;

        return (
          <div key={`main-menu-${index}`}>
            <NavItem url={`${menuURL}`}>{title}</NavItem>
          </div>
        );
      })}
    </>
  );
}
