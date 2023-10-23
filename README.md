# アプリケーション名

user-register
​

## アプリケーションの作成に至る背景

Vue3 をある程度インプットしたため、自身の理解を図るべく作成
​

## 定義

エディタ：vscode
フロント：Vue3 × Vite（TypeScript）
node: v18.18.2
npm: 7.17.0
yarn: 1.22.10
データベース：FireBase
追々、MySQL にする。
スタイル：css（style scoped）
ソースコード：GitHub（user-register）
​

## 用件定義

- 機能
  名前と年齢を入力した際に、リスト形式で追加していく。
  最大 10 名まで。
  ​
  名前の入力、もしくは年齢の入力が無い場合はエラーを出す。
  ​
- データログ
  ユーザー名は name、年齢は age で記載。
  データは Firebase で管理。
​

## 起動

yarn dev
