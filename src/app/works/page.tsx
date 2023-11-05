import WorksCard from "@/components/molecules/WorksCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works - MyCanvas",
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

export default function Works() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Works</h1>
      <p className="text-lg">
        個人やチームで開発したプロダクトの紹介です。リンクからサービスページに飛べるのでよかったら使用してみてください。
      </p>
      <WorksCard title="ReportAI" imagePath="/ReportAI.png" alt="ReportAIのロゴ">
        ReportAIは、大学生の課題やレポートの作成を手伝うAIサービスです。
        <br />
        <Link className="italic" href="https://reportai.jp" target="_blank">
          →ReportAIへのリンク
        </Link>
      </WorksCard>

      <WorksCard title="AI聊天君" imagePath="/AIChat.png" alt="AI聊天君のロゴ">
        AI聊天君は、LINE上でAIとチャットができる台湾向けのサービスです。
        <br />
        <Link
          className="italic"
          href="https://liff.line.me/1645278921-kWRPP32q/?accountId=ai_linechat"
          target="_blank"
        >
          →AI聊天君へのリンク
        </Link>
      </WorksCard>
    </div>
  );
}
