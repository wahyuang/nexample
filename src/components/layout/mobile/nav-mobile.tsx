"use client";

import Link from "@/components/link";
import { useMobileContext } from "@/context/MobileMenu";
import { useGlobalContext } from "@/context/global-context";

export default function NavMobile() {
  const { setMobileMenu } = useMobileContext();
  const { MainMenu } = useGlobalContext();
  const navItems = MainMenu.data.length ? MainMenu.data : [];

  return (
    <div className="space-y-8">
      {navItems.map((item, index) => {
        const { title, url, page_item } = item.attributes;
        const relation = page_item.data;
        const menuURL = relation ? `/${relation.attributes.slug}` : url;

        return (
          <div key={`side-menu-item-${index}`}>
            <Link href={menuURL} onClick={() => setMobileMenu(false)}>
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
