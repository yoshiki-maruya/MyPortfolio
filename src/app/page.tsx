import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '@/components/PostCard';
import HomeAbout from '@/components/HomeAbout';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_HOST_URL ?? ""),
  title: "MyCanvas",
  description: "MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。",
  applicationName: "MyCanvas",
  authors: { name: "Yoshiki Maruya" },
  keywords: ["プログラミング", "ブログ", "投資", "個人開発"],
  creator: "Yoshiki Maruya",
  publisher: "Yoshiki Maruya",
  openGraph: {
    type: "website",
    title: "MyCanvas",
    description: 'MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。',
    siteName: "MyCanvas"
  }
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
