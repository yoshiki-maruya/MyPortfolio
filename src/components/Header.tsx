'use client';
import Image from "next/image";
import CustomLink from "./atoms/CustomLink";

const Header = () => {
  return (
    <header className="grid grid-cols-9 place-items-center pt-2 pb-2 border-b-2 border-b-gray-500">
      <CustomLink className="col-start-4" href="/portfolio">
        <p>portfolio</p>
      </CustomLink>
      <CustomLink href="/">
        <Image className="rounded-full" src="/me.jpg" alt="me" width="64" height="64" />
      </CustomLink>
      <CustomLink href="/blog">
        <p>blog</p>
      </CustomLink>
    </header>
  );
};

export default Header;
