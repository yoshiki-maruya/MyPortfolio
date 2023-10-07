import { Inter } from 'next/font/google';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard/PostCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="col-span-4 overflow-auto">
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-5xl">Portfolio</h1>
        <p className="flex-row">Yoshiki Maruya</p>
      </div>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  )
}
