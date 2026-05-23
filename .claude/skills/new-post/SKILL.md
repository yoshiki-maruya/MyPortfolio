---
name: new-post
description: Scaffold a new blog post MDX file in posts/ with the required Contentlayer frontmatter. Use when the user wants to start writing a new blog article.
---

新しいブログ記事の MDX ファイルを `posts/` に作成する。

今日の日付: !`date +%Y-%m-%d`
ファイル名用の日付: !`date +%Y%m%d`

ユーザーが指定したテーマ: $ARGUMENTS

## 手順

1. ファイル名は `posts/<YYYYMMDD>.mdx`（上の「ファイル名用の日付」を使う）。同じ日付のファイルが既に存在する場合は、ユーザーに確認するか連番（`<YYYYMMDD>-2.mdx` 等）にする。
2. フロントマターを以下の必須フィールドで作成する（`.claude/rules/blog-posts.md` のスキーマに従う）:
   - `title`: $ARGUMENTS を元にした記事タイトル。未指定ならユーザーに尋ねる。
   - `description`: 記事内容の1〜2文の要約。
   - `date`: 上の「今日の日付」（`YYYY-MM-DD`）。
   - `tags`: 内容に合った日本語タグのリスト（既存記事のタグ命名に倣う。例: `Web開発`, `キャッシュ`）。
3. 本文は `## はじめに` の見出しから書き始め、プレースホルダの導入文を入れる。
4. 作成後、`pnpm dev` で `/blog` に記事が表示されること、`pnpm test:ci` が通ることを促す（実行はユーザーの指示に従う）。

タイトルや内容が曖昧な場合は、記事のテーマ・想定読者・含めたいトピックを先にユーザーに確認すること。
