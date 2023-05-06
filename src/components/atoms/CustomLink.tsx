'use client';
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export interface CustomLinkProps {
  href: Url,
  className?: string,
  children?: React.ReactNode,
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <Link href={href}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
