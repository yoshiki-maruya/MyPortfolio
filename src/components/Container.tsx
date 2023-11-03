"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Container = ({ children }: { children: React.ReactNode }) => {
  const isPC = useMediaQuery(768);
  return (
    <>
      {isPC ? (
        <body className="font-body hidden-scrollbar grid h-screen grid-cols-12 max-md:hidden">
          <Sidebar />
          <main className="col-span-9 overflow-auto">{children}</main>
        </body>
      ) : (
        <body className="md:hidden">
          <Header />
          <main className="col-span-4">{children}</main>
        </body>
      )}
    </>
  );
};

export default Container;
