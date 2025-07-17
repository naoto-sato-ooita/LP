# 雷環の封龍士 - Sealcraft: Lightning Legacy

## プロジェクト概要

スマートフォン向けゲームアプリ「雷環の封龍士（Sealcraft: Lightning Legacy）」のランディングページです。

### 製品情報
- **製品名**: 雷環の封龍士（JP） / Sealcraft: Lightning Legacy（EN）
- **分類**: スマートフォン向けゲームアプリ
- **配信プラットフォーム**: AppStore（iOS向け）
- **言語**: 英語（プライマリ）/ 日本語
- **ターゲット**: マジック：ザ・ギャザリングをプレイする男性
- **ジャンル**: ゲーム / スチームパンク / パズル
- **価格**: 基本無料（アプリ内課金あり）

## 技術スタック

- **フロントエンド**: HTML5 / CSS3 / JavaScript (ES6+)
- **アニメーション**: animate.style ライブラリ
- **レスポンシブ**: CSS Grid / Flexbox
- **ローカライゼーション**: JSON形式の言語ファイル
- **フォント**: Google Fonts (Noto Sans JP, Roboto)
- **アイコン**: Font Awesome

## 機能

### 主要機能
- レスポンシブデザイン（スマートフォン最適化）
- 日英ローカライゼーション
- アニメーション効果
- メール登録フォーム
- SEO対策

### セクション構成
1. **ヒーローセクション**: 製品名、キャッチコピー、AppStoreリンク
2. **物語セクション**: ゲームの背景ストーリー
3. **特徴セクション**: ゲームの3つの主要特徴
4. **メリットセクション**: ユーザーにとってのメリット
5. **CTAセクション**: メール登録フォーム
6. **フッター**: 制作者情報、リンク

## セットアップ

### 前提条件
- モダンブラウザ（Chrome, Firefox, Safari, Edge）
- ローカルサーバー（推奨）

### インストール手順

1. リポジトリをクローン
```bash
git clone [repository-url]
cd LP
```

2. ローカルサーバーを起動
```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx serve .

# PHPの場合
php -S localhost:8000
```

3. ブラウザでアクセス
```
http://localhost:8000
```

## ファイル構成

```
LP/
├── index.html              # メインHTMLファイル
├── css/
│   ├── style.css          # メインスタイルシート
│   └── responsive.css     # レスポンシブデザイン
├── js/
│   ├── main.js           # メインJavaScript
│   └── animations.js     # アニメーション制御
├── images/
│   ├── appstore-badge.svg # AppStoreバッジ
│   └── game-screenshots/  # ゲームスクリーンショット
├── locales/
│   ├── en.json           # 英語ローカライゼーション
│   └── ja.json           # 日本語ローカライゼーション
├── Circuit_Game_プロジェクト構造.md  # プロジェクト構造ドキュメント
└── README.md             # このファイル
```

## 開発ガイド

### ローカライゼーション
新しい言語を追加する場合：
1. `locales/` ディレクトリに新しい言語ファイルを作成
2. `index.html` に言語選択ボタンを追加
3. `js/main.js` のLocalizationクラスを更新

### スタイルの変更
- メインスタイル: `css/style.css`
- レスポンシブデザイン: `css/responsive.css`

### アニメーションの追加
- アニメーション制御: `js/animations.js`
- animate.styleライブラリを使用

## ブラウザサポート

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## パフォーマンス

- 画像の最適化
- CSS/JavaScriptの圧縮
- 遅延読み込み
- キャッシュ戦略

## SEO対策

- メタタグ最適化
- 構造化データ対応
- ページ読み込み速度最適化
- モバイルファーストデザイン

## ライセンス

© 2024 STADIO KATAOKA. All rights reserved.

## 連絡先

- **開発者**: STADIO KATAOKA
- **メール**: kataoka@sealcraft.app
- **ウェブサイト**: https://sealcraft.app 