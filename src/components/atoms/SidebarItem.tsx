import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { EventHandler, ReactNode, SyntheticEvent } from "react";

export interface ISideBarItem {
  text?: string;
  icon?: ReactNode;
  active?: number | null;
  index?: number;
  href: Url;
  onClick?: EventHandler<SyntheticEvent<Element>>;
}

const SidebarItem: React.FC<ISideBarItem> = ({ text, icon, active, index, href, onClick }) => {
  return (
    <Link
      className={`
        group relative my-1.5 flex cursor-pointer items-center
        rounded-md px-3 py-5
        font-medium transition-colors
        ${
          active === index
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "text-gray-600 hover:bg-indigo-50"
        }
      `}
      onClick={(event) => onClick && onClick(event)}
      href={href}
    >
      <span className="flex gap-2">
        {icon}
        {text}
      </span>
    </Link>
  );
};

export default SidebarItem;
