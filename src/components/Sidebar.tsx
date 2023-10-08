'use client';
import sidebarList from "@/utils/const/sidebarList";
import Image from "next/image";
import SidebarItem from "./atoms/SidebarItem/SidebarItem";
import { useState, useCallback, useEffect } from "react";
import { createUrl } from "@/utils/url";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Sidebar: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const pathname = usePathname();
  const handleItemClick = useCallback((index: number) => {
    setActive(index);
  }, [])

  useEffect(() => {
    if (pathname === '/') setActive(null);
  }, [pathname])
  return (
    <aside className="h-full bg-white border-r shadow-sm">
      <nav className="grid grid-rows-6 gap-3">
        <div className="p-4 grid justify-center">
          <Link href="/">
            <Image className="rounded-full" src="/me.jpg" alt="me"  width="64" height="64" />
          </Link>
        </div>
        {
          sidebarList.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                text={item}
                active={active}
                index={index}
                href={createUrl(item)}
                onClick={() => handleItemClick(index)}
              />
            )
          })
        }
      </nav>
    </aside>
  )
}

export default Sidebar;
