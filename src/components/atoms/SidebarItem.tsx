import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { EventHandler, SyntheticEvent } from "react";

export interface ISideBarItem {
  text?: string,
  active?: number | null,
  index?: number,
  href: Url,
  onClick?: EventHandler<SyntheticEvent<Element>>,
}

const SidebarItem: React.FC<ISideBarItem> = ({
  text,
  active,
  index,
  href,
  onClick,
}) => {
  return (
    <Link
      className={`
        relative flex items-center py-5 px-3 my-1.5
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active === index
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      onClick={(event) => onClick && onClick(event)}
      href={href}
    >
      <span>
        {text}
      </span>
    </Link>
  )
}

export default SidebarItem;
