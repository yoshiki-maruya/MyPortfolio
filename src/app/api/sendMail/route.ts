import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

    const msgToManager = {
      to: "yoshiki.maruya@gmail.com",
      from: "yoshiki.maruya@gmail.com",
      subject: "ポートフォリオサイトからの問い合わせ",
      text: name + "様からお問合せがありました。" + "メッセージ：" + message + "アドレス：" + email,
      html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
      `,
    };

    const msgToUser = {
      to: email,
      from: "yoshiki.maruya@gmail.com",
      subject: "お問合せありがとうございました。",
      text: "お問合せを受け付けました。回答をお待ちください。" + message,
      html: `
        <p>${name}様</p>
        <p>お問合せを受け付けました。回答をお待ちください。</p><br/>

        <p>【問い合わせ内容】</p>
        <p>${message}</p>
      `,
    };

    try {
      await sgMail.send(msgToManager);
      await sgMail.send(msgToUser);
      return NextResponse.json(msgToUser, { status: 200 });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
}
