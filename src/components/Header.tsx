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

const Header = () => {
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

      <div
        className={
          openMenu
            ? "text-right fixed left-0 top-0 w-4/12 h-screen flex flex-col justify-start pt-8 px-3"
            : "fixed left-[-100%]"
        }
        onClick={handleMenuOpen}
      ></div>
      <nav
        className={
          openMenu
            ? "text-left fixed bg-slate-50 z-10 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
            : "fixed right-[-100%] ease-linear duration-300"
        }
      >
        <ul className="grid grid-rows-4 gap-10 justify-items-center mt-10">
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
  )
}

export default Header;
