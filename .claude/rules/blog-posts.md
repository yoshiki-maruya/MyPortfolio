---
paths:
  - "posts/**/*.mdx"
---

# ブログ記事（MDX）規約

記事は `posts/` 配下に `YYYYMMDD.mdx` 形式のファイル名で作成する。Contentlayer が型付きの `allPosts` としてビルド時に読み込み、`/blog/<ファイル名>` のページを生成する。

フロントマターは以下が**すべて必須**（`contentlayer.config.ts` 参照）:

```mdx
---
title: 記事タイトル
description: 記事の説明（一覧やメタ情報に使われる）
date: YYYY-MM-DD
tags:
  - タグ1
  - タグ2
---
```

- `date` は ISO 形式（`YYYY-MM-DD`）。ファイル名の日付と一致させる。
- `tags` は文字列のリスト。`/categories/<tag>` ページに対応する。
- 本文は MDX。コードブロックは rehype-pretty-code（テーマ `one-dark-pro`）でハイライトされる。
- フロントマターのフィールドを増減・改名する場合は `contentlayer.config.ts` のスキーマも合わせて更新する。
