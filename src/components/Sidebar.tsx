"use client";
import sidebarList from "@/utils/const/sidebarList";
import iconList from "@/utils/const/iconList";
import SidebarItem from "./atoms/SidebarItem";
import { useState, useCallback, useEffect } from "react";
import { createUrl } from "@/utils/url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Sans_JP } from "next/font/google";
import Icon from "./atoms/Icon";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const pathname = usePathname();
  const handleItemClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    if (pathname === "/") setActive(null);
  }, [pathname]);
  return (
    <aside className="col-span-3 h-full border-r bg-white shadow-sm">
      <nav className="grid grid-rows-5 gap-3 py-4">
        <div className="grid justify-center p-4">
          <Link href="/">
            <h2 className={notojp.className}>MyCanvas</h2>
          </Link>
        </div>
        {sidebarList.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              text={item}
              icon={<Icon name={iconList[index]} />}
              active={active}
              index={index}
              href={createUrl(item)}
              onClick={() => handleItemClick(index)}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
