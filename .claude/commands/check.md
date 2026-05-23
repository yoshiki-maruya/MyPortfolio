---
description: Run the CI-equivalent checks locally (build, lint, prettier, tests)
---

CI（`.github/workflows`）が `main` への push で実行するのと同じチェックをローカルで実行し、push 前に失敗を洗い出す。

以下を順に実行し、各ステップの結果を報告すること。途中で失敗しても残りも実行し、最後にどれが落ちたかをまとめる。

1. `pnpm build`
2. `pnpm lint`
3. `pnpm prettier`
4. `pnpm test:ci`

失敗があれば原因を特定して修正案を提示する。`pnpm prettier` は整形差分が出る場合があるので、差分が出たら `git diff` で内容を確認してから知らせること。すべて成功したら「CI 相当のチェックはすべてパス」と明示する。
