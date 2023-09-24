import { EventHandler, SyntheticEvent } from "react";

export interface ISideBarItem {
  text: string,
  active?: number,
  index?: number,
  onClick?: EventHandler<SyntheticEvent<Element>>,
}

const SidebarItem: React.FC<ISideBarItem> = ({
  text,
  active,
  index,
  onClick,
}) => {
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active === index
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      onClick={(event) => onClick && onClick(event)}
    >
      <span>
        {text}
      </span>
    </li>
  )
}

export default SidebarItem;