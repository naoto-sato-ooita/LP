This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 静的エクスポート

プロジェクトは静的エクスポート（HTML5/CSS3/JavaScript）に対応しています。

### エクスポート手順

1. プロジェクトをビルドしてエクスポートする:
   ```bash
   npm run build-export
   ```

2. 生成された静的ファイルは `out/` ディレクトリに配置されます。

### 注意事項

- 動的ルーティングやサーバーサイド機能は静的エクスポート時に制限されます。
- 外部APIとの統合に注意が必要です。
- 画像の最適化は無効化されています。
