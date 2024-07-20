import type { Metadata } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/molecules/PostCard";
import HomeAbout from "@/components/HomeAbout";

export const metadata: Metadata = {
  title: "MyCanvas",
  description:
    "MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。",
  applicationName: "MyCanvas",
  authors: { name: "Yoshiki Maruya" },
  keywords: ["プログラミング", "ブログ", "投資", "個人開発"],
  creator: "Yoshiki Maruya",
  publisher: "Yoshiki Maruya",
  verification: { google: "vXE6PZ2R5tMVsIBWDWwFGwEs3ae91nT6F0-YIlj42Is" },
  openGraph: {
    type: "website",
    title: "MyCanvas",
    description:
      "MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。",
    siteName: "MyCanvas",
  },
};

export default function Home() {
  const recentPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);

  return (
    <>
      <HomeAbout />
      <div className="mx-auto max-w-lg px-6 py-8">
        <h1 className="mb-8 text-center text-2xl font-black">Intro</h1>
        <p className="mb-16">MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。</p>
        <h1 className="mb-8 text-center text-2xl font-black">Recent Blog</h1>
        {recentPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
