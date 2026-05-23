---
paths:
  - "__tests__/**/*.test.ts"
  - "__tests__/**/*.test.tsx"
---

# テスト規約

Jest（`next/jest` + `jest-environment-jsdom`）と React Testing Library を使用します。

- グローバルは必ず `@jest/globals` から明示的に import する（`describe`, `it`, `expect`, `beforeEach`, `jest` など）。`jest.mock` や `jest.fn` を使うファイルでは `jest` の import を忘れない。
- マッチャは `@testing-library/jest-dom/jest-globals` を import して使う。
- import は相対パスではなく `@/*`（= `src/*`）エイリアスを使う。

## next/navigation のモック

`jest.mock` のファクトリ内で `jest.fn()` を参照してはいけない。Babel のホイストによりファクトリが `jest` 解決前に実行され、モックが**無言で適用されず**実関数が呼ばれてしまう（router コンテキスト外で throw する）。`mock` プレフィックスの素の変数をファクトリで参照すること。

```ts
let mockPathname = '/about';
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }));
```

## 良いテストの条件

- アサーションが空振り（実装を消しても通る）にならないこと。状態リセットなどは、変化の前後を `rerender` で再現して検証する。
- 単一テストの実行: `npx jest <path>` または `npx jest -t "<test name>"`。
