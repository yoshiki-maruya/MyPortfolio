'use client'
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import HumbergerHeader from "@/components/HambergerHeader";
import useMediaQuery from "@/hooks/useMediaQuery";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPC = useMediaQuery(768)
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {
        isPC ? (
          <body className="font-body h-screen grid grid-cols-5 hidden-scrollbar">
            <Sidebar />
            <main className="col-span-4 overflow-auto">
              {children}
            </main>
          </body>
        )
        :
        (
          <body className="">
          <HumbergerHeader />
          <main className="col-span-4 overflow-auto">
            {children}
          </main>
        </body>
        )
      }
    </html>
  );
}
