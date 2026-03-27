# portfolio (tech)

個人ポートフォリオサイトのソースコードです。制作した作品を紹介するために React で構築しています。

## 収録作品

| # | タイトル | 技術 |
|---|---------|------|
| 1 | 偉人性格診断 LINE Bot (Node.js) | Node.js, Express, LINE API, Supabase, Render |
| 2 | 偉人性格診断 LINE Bot (React) | LINE LIFF, React |
| 3 | figma-layer-to-yaml-plugin | TypeScript, React, Figma Plugin API |

## 技術スタック

- **フレームワーク**: React (Create React App)
- **言語**: JavaScript / TypeScript
- **ルーティング**: React Router DOM
- **スタイル**: CSS (カスタム)
- **フォント**: Google Sans Flex
- **その他**: EmailJS (Contact フォーム)

## ディレクトリ構成

```
src/
├── App.js               # ルーティング設定
├── Home.js              # トップページ（作品一覧グリッド）
├── About.js             # About ページ
├── Contact.js           # Contact ページ
├── WorkDetail.js        # 作品詳細ページ（動的ルート /works/:id）
├── styles.css           # グローバルスタイル
├── data/
│   └── works.js         # 作品データ（詳細ページのコンテンツ管理）
└── components/
    └── LiquidMetalBackground.js  # トップのアニメーション背景
```

## セットアップ

```bash
npm install
npm start
```

開発サーバーが `http://localhost:3000` で起動します。

## ビルド

```bash
npm run build
```

## 作品の追加方法

`src/data/works.js` にオブジェクトを追加し、`src/Home.js` の `WORKS` 配列に対応するカード情報を追加します。

```js
// src/data/works.js
{
  id: 'your-work-id',       // URL に使用: /works/your-work-id
  title: 'タイトル',
  catchcopy: 'キャッチコピー',
  description: '概要テキスト',  // 文字列 or 文字列の配列
  thumbnail: '/image/thumb.png',
  gif: '/image/demo.gif',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/...',
  features: ['機能1', '機能2'],
  // 任意
  screenshots: ['/image/ss1.png', '/image/ss2.png'],
  comparison: [{ item: '項目', lstep: 'A', custom: 'B' }],
}
```
