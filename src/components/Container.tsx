'use client'
import useMediaQuery from "@/hooks/useMediaQuery"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Container = ({ children }: { children: React.ReactNode }) => {
  const isPC = useMediaQuery(768)
  return (
    <>
      {
        isPC ? (
          <body className="font-body h-screen grid grid-cols-5 hidden-scrollbar max-md:hidden">
            <Sidebar />
            <main className="col-span-4 overflow-auto">
              {children}
            </main>
          </body>
        )
        :
        (
          <body className="md:hidden">
            <Header />
            <main className="col-span-4 overflow-auto">
              {children}
            </main>
          </body>
        )
      }
    </>
  )
}

export default Container
