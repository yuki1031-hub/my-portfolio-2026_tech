const works = [
  {
    id: 'line-bot',
    title: '偉人性格診断 LINE Bot',
    catchcopy: 'Lステップ不使用・DB連携・予約配信機能付き',
    description: 'LINEチャットボットをLステップを使わずNode.js + Supabaseで自作。9問4択の性格診断・DB連携・特定タイプへの予約配信・リッチメニューの出し分けを実装。',
    thumbnail: '/image/line-bot-thumb.png',
    gif: '/image/linebotdemo.gif',
    tags: ['Node.js', 'Express', 'LINE API', 'Supabase', 'Render'],
    github: 'https://github.com/yuki1031-hub/line-bot',
    features: [
      '9問4択のスコア方式による性格診断',
      'Flex Messageによるボタン形式UI',
      '診断結果の画像表示',
      'Supabaseによるユーザーデータ永続化',
      '再診断機能',
      '特定タイプへの予約配信機能',
      'リッチメニューの出し分け（診断前・診断後）',
    ],
    comparison: [
      { item: '月額費用', lstep: '約3,000円〜', custom: 'ほぼ0円' },
      { item: 'カスタマイズ', lstep: '制限あり', custom: '無限' },
      { item: 'DB連携', lstep: '❌', custom: '✅' },
      { item: '予約配信', lstep: '✅', custom: '✅' },
      { item: 'AI連携', lstep: '❌', custom: '対応可' },
    ],
  },
];

export default works;