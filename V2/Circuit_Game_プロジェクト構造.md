# Circuit Game プロジェクト構造

## プロジェクト概要
- フレームワーク: Next.js
- 言語: TypeScript
- スタイリング: Tailwind CSS

## 静的エクスポート対応
- 静的エクスポート設定: 有効
- エクスポート方法: `npm run build-export`
- 出力ディレクトリ: `out/`

## ディレクトリ構造
```
V2/
├── app/
│   ├── components/       # 再利用可能なReactコンポーネント
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # アプリケーションレイアウト
│   ├── page.tsx          # メインページ
│   └── not-found.tsx     # 404ページ
├── next.config.ts        # Next.js設定
├── package.json          # 依存関係とスクリプト
└── tailwind.config.js    # Tailwind CSS設定
```

## 依存関係
- React 19
- Next.js 15
- Tailwind CSS
- Recharts (グラフライブラリ)

## 静的エクスポート時の制限
- 動的ルーティングは制限あり
- サーバーサイド機能は使用不可
- 画像の最適化は無効

## 更新履歴
- 2024-06-14: 静的エクスポート対応追加 