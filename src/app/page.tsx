import type { Metadata } from 'next'
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard/PostCard';

export const metadata: Metadata = {
  title: "Yoshiki's Portfolio",
  description: 'Intro, Works, Blog, etc.',
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="h-72 flex items-center justify-center flex-col">
        <h1 className="text-5xl">Portfolio</h1>
        <p className="flex-row">Yoshiki Maruya</p>
      </div>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  )
}
