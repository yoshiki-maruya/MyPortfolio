'use client';
import sidebarList from "@/utils/const/sidebarList";
import Image from "next/image";
import SidebarItem from "./atoms/SidebarItem";
import { useState } from "react";


const Sidebar: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <aside className="h-screen">
      <nav className="h-full grid grid-rows-6 bg-white border-r shadow-sm">
        <div className="p-4 pb-2 grid justify-center">
          <Image className="rounded-full" src="/me.jpg" alt="me"  width="64" height="64" />
        </div>
        {
          sidebarList.map((item, index) => {
            return (
              <SidebarItem key={index} text={item} active={active} />
            )
          })
        }
      </nav>
    </aside>
  )
}

export default Sidebar;
