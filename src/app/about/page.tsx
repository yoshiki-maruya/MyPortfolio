import AboutCard from "@/components/molecules/AboutCard";
import HomeAbout from "@/components/HomeAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - MyCanvas",
  description:
    "MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。",
  applicationName: "MyCanvas",
  authors: { name: "Yoshiki Maruya" },
  keywords: ["プログラミング", "ブログ", "投資", "個人開発"],
  creator: "Yoshiki Maruya",
  publisher: "Yoshiki Maruya",
  openGraph: {
    type: "website",
    title: "MyCanvas",
    description:
      "MyCanvasは自分の好きなことを好きに表現するサイトです。メインはプログラミング関係のブログ記事や個人開発したサービスの紹介になります。",
    siteName: "MyCanvas",
  },
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-8 text-center text-2xl font-black">About</h1>
      <HomeAbout />
      <div className="border-2"></div>
      <AboutCard title="Profile">
        普段は外資系のITコンサル会社で働いているまるやきです。
        <br />
        社会人2年目、プログラミングと投資が好きです。
      </AboutCard>
      <AboutCard title="Hobby">
        ・プログラミング（最近はNext.jsとBaaSに関心があります）
        <br />
        ・ファッション（学生時代は下北通いで古着収集をしていましたが、最近は韓国ブランドとかもウォッチしてます）
        <br />
        ・ラーメン（二郎系が好み、成蹊前ラーメン・桜台二郎・ひばりヶ丘二郎が好き）
      </AboutCard>
      <AboutCard title="Investment">
        個別株（国内株、米国株）、投信がメイン
        <br />
        VYMをつみニーとは別で積立ている（2年くらい）が、期待していた感じではないなぁというのが最近の悩み。別ETFに乗り換えるなら何が良いんだろうか
        <br />
        個別株は商社株と銀行株がポートフォリオのメインです。2023年はすごい調子良いのでハッピーですね！
      </AboutCard>
    </div>
  );
}
