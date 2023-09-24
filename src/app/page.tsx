import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="col-span-4">
      <div className="h-screen flex items-center justify-center flex-col animate-focus-in-contract">
        <h1 className="text-5xl">Portfolio</h1>
        <p className="flex-row">Yoshiki Maruya</p>
      </div>
    </main>
  )
}
