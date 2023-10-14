import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard/PostCard';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yoshiki's Portfolio",
  description: 'Intro, Works, Blog, etc.',
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="h-72 grid grid-cols-2 gap-x-4 mx-auto max-w-2xl px-6 py-8 content-center place-items-center">
        <div>
          <Image className="rounded-full border-4" src="/me.jpg" alt="me"  width="200" height="200" />
        </div>
        <div>
          <h3>・I&apos;m Software Developer</h3>
          <h3>・I&apos;m IT Consultant</h3>
          <h3>・I&apos;m Investor</h3>
        </div>
      </div>
      <div className="mx-auto max-w-xl px-6 py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Popular Blog</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  )
}
