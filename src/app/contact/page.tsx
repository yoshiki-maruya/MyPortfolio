import Form from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - MyCanvas",
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

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Contact</h1>
      <Form />
    </div>
  );
}
