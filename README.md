# MyCanvas

Yoshiki Maruya のポートフォリオ兼ブログサイト。Next.js 13 (App Router) と Contentlayer で構築し、Vercel にデプロイしています。プログラミング関連のブログ記事や個人開発したサービスの紹介を掲載しています。

## 技術スタック

- **Next.js 13** (App Router) / React 18 / TypeScript
- **Contentlayer** — `posts/` 配下の MDX をブログ記事として型付きで読み込み
- **Tailwind CSS** (+ `@tailwindcss/typography`, `prettier-plugin-tailwindcss`)
- **react-hook-form** + **yup** — お問い合わせフォームのバリデーション
- **Resend** — お問い合わせメール送信
- **Jest** + **Testing Library** — ユニットテスト
- **pnpm** / Volta (Node 24.5.0, pnpm 10.14.0)

## セットアップ

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開きます。`pnpm dev` は `contentlayer dev` と `next dev` を同時に起動するため、ブログ記事 (`contentlayer/generated`) が常に最新の状態になります。

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー（Contentlayer + Next.js）を起動 |
| `pnpm build` | 本番ビルド |
| `pnpm start` | 本番サーバーを起動 |
| `pnpm lint` | ESLint (`next lint`) |
| `pnpm prettier` | `src/**/*.{ts,tsx}` を整形 |
| `pnpm test` | Jest を実行 |
| `pnpm test:ci` | CI 用に Jest を `--ci` で実行 |

## 環境変数

`.env` に以下を設定します。

| 変数 | 用途 |
| --- | --- |
| `RESEND_API_KEY` | お問い合わせメール送信 (Resend) |
| `GA_ID` | Google Analytics |
| `GOOGLE_ADSENSE_PID` | Google AdSense |
| `WEBSITE_HOST_URL` | サイトの公開 URL（sitemap など） |

## ブログ記事の追加

`posts/` に `YYYYMMDD.mdx` 形式でファイルを作成し、以下のフロントマターを記述します（すべて必須）。

```mdx
---
title: 記事タイトル
date: 2026-01-01
description: 記事の説明
tags:
  - プログラミング
---

本文（MDX）
```

Contentlayer がビルド時に `allPosts` として読み込み、`/blog/<ファイル名>` のページが自動生成されます。

## ディレクトリ構成

```
posts/                     ブログ記事 (MDX)
src/
  app/                     App Router のページ・API ルート
  components/              共通コンポーネント
    atoms/ molecules/      アトミックデザイン
  contexts/ providers/ hooks/   グローバル状態（Snackbar など）
  utils/                   ユーティリティ・定数
contentlayer.config.ts     Contentlayer（記事スキーマ・MDX プラグイン）の設定
```

## CI / デプロイ

`main` への push をトリガーに GitHub Actions でビルド → Lint → Prettier → テストを実行します。デプロイは Vercel で行います。
