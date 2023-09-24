'use client';
import sidebarList from "@/utils/const/sidebarList";
import Image from "next/image";
import SidebarItem from "./atoms/SidebarItem";
import { useState, useCallback } from "react";


const Sidebar: React.FC = () => {
  const [active, setActive] = useState<number>();
  const handleItemClick = useCallback((index: number) => {
    setActive(index);
  }, [])
  return (
    <aside className="h-full bg-white border-r shadow-sm">
      <nav className="grid grid-rows-6 gap-3">
        <div className="p-4 grid justify-center">
          <Image className="rounded-full" src="/me.jpg" alt="me"  width="64" height="64" />
        </div>
        {
          sidebarList.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                text={item}
                active={active}
                index={index}
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
