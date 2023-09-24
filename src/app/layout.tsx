import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body h-screen grid grid-cols-5">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
