"use client";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

const HomeAbout = () => {
  const isMobile = useMediaQuery(450);
  return (
    <div
      className={`
        mx-auto grid h-72 max-w-2xl place-items-center content-center gap-x-4 px-6 py-8
        ${isMobile ? "grid-cols-2" : "my-7 grid-cols-1 gap-y-5"}
      `}
    >
      <div>
        <Image className="rounded-full border-4" src="/me.jpg" alt="me" width="200" height="200" />
      </div>
      <div>
        <h3>・ I&apos;m IT Engineer</h3>
        <h3>・ I&apos;m IT Consultant</h3>
        <h3>・ I&apos;m Investor</h3>
      </div>
    </div>
  );
};

export default HomeAbout;
