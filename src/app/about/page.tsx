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
        社会人4年目、プログラミングと投資が好きです。
      </AboutCard>
      <AboutCard title="Hobby">
        ・プログラミング（最近はNext.jsとBaaSに関心があります）
        <br />
        ・ファッション（学生時代は下北通いで古着収集をしていましたが、最近は韓国ブランドとかもウォッチしてます）
        <br />
        ・ラーメン（二郎系が好み、桜台二郎・ひばりヶ丘二郎が好き）
      </AboutCard>
      <AboutCard title="My Tech Stack">
        <div className="relative overflow-x-auto sm:rounded-lg border">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Technology Stack
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Programming Languages<br/>/Library etc.
                </th>
                <td className="px-6 py-4">
                  <p className="font-bold">Frontend</p>
                  HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Cypress, Jest
                  <p className="font-bold">Backend</p>
                  C#, Python, TypeScript, C++
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Infrastructure
                </th>
                <td className="px-6 py-4">
                  Azure, Amazon Web Services
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Middleware
                </th>
                <td className="px-6 py-4">
                  Azure App Service, Azure Functions, AWS Lambda
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Messaging
                </th>
                <td className="px-6 py-4">
                  Azure Service Bus
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Database
                </th>
                <td className="px-6 py-4">
                  Azure SQL DB(SQL Server), Azure Cosmos DB, MySQL, Cloud Firestore, Azure Storage(BLOB, Queue, Table), Amazon S3
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  monitoring
                </th>
                <td className="px-6 py-4">
                  Azure Monitor, Azure App Insights
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Environment setup
                </th>
                <td className="px-6 py-4">
                  Docker
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  AI/Machine Learning<br/>/Search Service
                </th>
                <td className="px-6 py-4">
                  Azure OpenAI Service, Azure AI Search, scikit-learn, PyTorch, OpenCV
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  CI/CD
                </th>
                <td className="px-6 py-4">
                  Github Actions, Azure Pipelines
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Code Management
                </th>
                <td className="px-6 py-4">
                  Github
                </td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Other Tools
                </th>
                <td className="px-6 py-4">
                  Azure DevOps, Postman, Storybook
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AboutCard>
      <AboutCard title="Investment">
        個別株（国内株、米国株）、投信がメイン
        <br />
        基本的にはスイングトレードで中長期の配当金目当ての投資もやっております。
        <br />
        新NISAも始まって成長投資枠を何で埋めようかというのも悩ましいですよね！
        <br />
        この辺の投資先なども今後ブログ内でまとめていきたいなと思います。
      </AboutCard>
    </div>
  );
}
