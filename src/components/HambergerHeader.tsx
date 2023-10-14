'use client'
import { useState } from "react";
import { Noto_Sans_JP } from 'next/font/google'
import Link from "next/link";
import CustomLink from "./atoms/CustomLink";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const HumbergerHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="flex justify-between px-6 py-3 border-b-2 border-b-gray-300 sticky top-0 bg-white">
      <Link href="/">
        <h2 className={notojp.className}>MyCanvas</h2>
      </Link>

      <button
        onClick={handleMenuOpen}
        type="button"
        className="z-20 space-y-2"
      >
        <div
          className={
            openMenu
              ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
              : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            openMenu
              ? "opacity-0 transition duration-500 ease-in-out"
              : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            openMenu
              ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
              : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
      </button>

      <nav
        className={
          openMenu
            ? "text-left fixed z-10 bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
            : "fixed right-[-100%] ease-linear duration-300"
        }
      >
        <ul className="mt-6">
          <CustomLink className="text-xs" href="/about">
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
        </ul>
      </nav>
    </header>
  )
}

export default HumbergerHeader;
