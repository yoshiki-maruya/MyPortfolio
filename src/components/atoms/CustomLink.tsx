'use client';
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { EventHandler, SyntheticEvent } from "react";

export interface CustomLinkProps {
  href: Url,
  className?: string,
  children?: React.ReactNode,
  onClick?: EventHandler<SyntheticEvent<Element>>,
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  children,
  onClick
}) => {
  return (
    <div className={className}>
      <Link href={href} onClick={(event) => onClick && onClick(event)}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
