// vueファイルをTSとして認識させるためのファイル
// エラー対策：モジュール './App.vue' またはそれに対応する型宣言が見つかりません。ts(2307)
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
