'use client';
import CustomLink from "./atoms/CustomLink";
import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <header className="grid grid-cols-9 items-center justify-items-center h-14 border-b-2 border-b-gray-300 sticky top-0">
      <CustomLink className="pl-4 text-sm" href="/">
        <h3 className={`${notojp.className} text-sm`}>MyCanvas</h3>
      </CustomLink>
      <CustomLink className="col-start-6 text-xs" href="/about">
        <p>ABOUT</p>
      </CustomLink>
      <CustomLink className="text-xs" href="/works">
        <p>WORKS</p>
      </CustomLink>
      <CustomLink className="text-xs" href="/blog">
        <p>BLOG</p>
      </CustomLink>
      <CustomLink className="text-xs" href="/contact">
        <p>CONTACT</p>
      </CustomLink>
    </header>
  );
};

export default Header;
