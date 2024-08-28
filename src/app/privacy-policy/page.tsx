import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MyCanvas",
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

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">プライバシーポリシー</h1>
        <p className="mb-8">{`
          当サイト（以下、「本サイト」といいます。）は、利用者の皆様のプライバシーを尊重し、個人情報の保護に努めています。
          本ポリシーは、本サイトで収集する情報、情報の利用方法、および利用者の権利について説明しています。
        `}</p>
        <h2 className="mb-8 text-center text-xl font-black">1. 収集する情報</h2>
        <p className="mb-8">{`
          本サイトでは、利用者の利便性向上およびコンテンツ改善のために、以下の情報を収集することがあります。
        `}</p>
        ・お問い合わせフォームの送信内容<br />
        ・Cookieを使用した利用状況の記録<br />
        ・アクセス解析ツール（Google Analytics）による匿名データの収集<br />
        <h2 className="mt-8 mb-8 text-center text-xl font-black">2. 情報の利用目的</h2>
        <p className="mb-8">{`
          収集した情報は、以下の目的のために利用します。
        `}</p>
        ・本サイトの運営、管理、改善のため<br />
        ・利用者からのお問い合わせに対応するため<br />
        ・利用者にカスタマイズされたコンテンツを提供するため<br />
        ・利用状況の分析およびサービス改善のため<br />
        <h2 className="mt-8 mb-8 text-center text-xl font-black">3. Google Analyticsの利用について</h2>
        <p className="mb-8">
          本サイトでは、Google Analyticsを使用してサイトの利用状況を分析しています。Google AnalyticsはCookieを使用して、匿名のトラフィックデータを収集します。
          この情報は、サイトのパフォーマンス向上のために使用され、個人を特定する目的では利用されません。
          Google Analyticsにより収集されたデータの詳細については、Googleの
          <a className="font-bold hover:text-indigo-200" href="https://policies.google.com/privacy?hl=ja" target="_blank">プライバシーポリシー</a>
          を参照してください。
        </p>
        <h2 className="mb-8 text-center text-xl font-black">4. 個人情報の第三者提供について</h2>
        <p className="mb-8">{`
          本サイトは、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
        `}</p>
        <h2 className="mb-8 text-center text-xl font-black">5. 免責事項</h2>
        ・本サイトに掲載されている情報の正確性には万全を期していますが、その内容の完全性や正確性を保証するものではありません。<br />
        ・利用者が本サイトの情報を用いて行う一切の行為について、本サイトは一切の責任を負いません。<br />
        ・本サイトからリンクされた他のウェブサイトの内容や、これらのサイトで提供されるサービスについても一切の責任を負いません。<br />
        <h2 className="mt-8 mb-8 text-center text-xl font-black">6. プライバシーポリシーの変更</h2>
        <p className="mb-8">{`
          本ポリシーの内容は、必要に応じて変更されることがあります。最新のプライバシーポリシーは本ページにて掲載いたしますので、定期的にご確認ください。
        `}</p>
      </div>
    </div>
  );
}