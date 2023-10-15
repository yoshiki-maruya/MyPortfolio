import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard';
import Image from "next/image";
import HomeAbout from '@/components/HomeAbout';

export const metadata: Metadata = {
  title: "Yoshiki's Portfolio",
  description: 'Intro, Works, Blog, etc.',
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <HomeAbout />
      <div className="mx-auto max-w-lg px-6 py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Popular Blog</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  )
}
