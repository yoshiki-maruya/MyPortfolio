import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();

    try {
      // 管理者宛メールを送信
      await resend.emails.send({
        from: "admin@yoshiki-maruya.com",
        to: "yoshiki.maruya@gmail.com",
        subject: "ポートフォリオサイトからの問い合わせ",
        html: `
          <p>【名前】</p>
          <p>${name}</p>
          <p>【メールアドレス】</p>
          <p>${email}</p>
          <p>【メッセージ内容】</p>
          <p>${message}</p>
        `,
      });

      // ユーザー宛メールを送信
      await resend.emails.send({
        from: "noreply@yoshiki-maruya.com",
        to: email,
        subject: "お問合せありがとうございました。",
        html: `
          <p>${name}様</p>
          <p>お問合せを受け付けました。回答をお待ちください。</p><br/>
          <p>【問い合わせ内容】</p>
          <p>${message}</p>
        `,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}