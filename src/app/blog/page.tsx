import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard/PostCard';

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="col-span-4 overflow-auto">
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  )
}
