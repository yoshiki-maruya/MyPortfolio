import WorksCard from "@/components/molecules/WorksCard";
import Link from "next/link";

export default function Works() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-12 text-center text-2xl font-black">Works</h1>
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
