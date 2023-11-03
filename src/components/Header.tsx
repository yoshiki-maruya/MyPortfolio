"use client";
import { useState } from "react";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import CustomLink from "./atoms/CustomLink";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="sticky top-0 flex justify-between border-b-2 border-b-gray-300 bg-white px-6 py-3">
      <Link href="/">
        <h2 className={notojp.className}>MyCanvas</h2>
      </Link>

      <button onClick={handleMenuOpen} type="button" className="z-20 space-y-2">
        <div
          className={
            openMenu
              ? "h-0.5 w-8 translate-y-2.5 rotate-45 bg-gray-600 transition duration-500 ease-in-out"
              : "h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            openMenu
              ? "opacity-0 transition duration-500 ease-in-out"
              : "h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            openMenu
              ? "h-0.5 w-8 -rotate-45 bg-gray-600 transition duration-500 ease-in-out"
              : "h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
      </button>

      <div
        className={
          openMenu
            ? "fixed left-0 top-0 flex h-screen w-4/12 flex-col justify-start px-3 pt-8 text-right"
            : "fixed left-[-100%]"
        }
        onClick={handleMenuOpen}
      ></div>
      <nav
        className={
          openMenu
            ? "fixed right-0 top-0 z-10 flex h-screen w-8/12 flex-col justify-start bg-slate-50 px-3 pt-8 text-left duration-300 ease-linear"
            : "fixed right-[-100%] duration-300 ease-linear"
        }
      >
        <ul className="mt-10 grid grid-rows-4 justify-items-center gap-10">
          <CustomLink href="/about" onClick={handleMenuOpen}>
            <p>ABOUT</p>
          </CustomLink>
          <CustomLink href="/works" onClick={handleMenuOpen}>
            <p>WORKS</p>
          </CustomLink>
          <CustomLink href="/blog" onClick={handleMenuOpen}>
            <p>BLOG</p>
          </CustomLink>
          <CustomLink href="/contact" onClick={handleMenuOpen}>
            <p>CONTACT</p>
          </CustomLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
