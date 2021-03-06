# How to contribute
## 用語
### アクション
拡張で実行する機能を、アクションとして定義します。  
アクションの実態は、以下のようなプレーンオブジェクトです。

```js
{
  key: 'fix_header',
  name: 'ヘッダーを固定',
  routes: [
    paths.all
  ],
  run: (config) => {
    const page = new CommonPage(document)
    const header = page.getHeaderElement()
    header.setAttribute('data-qiita-team-plus-fix-header', 'header')
  }
}
```

<table>
<tr><th>プロパティ</th><th>型</th><th>値</th></tr>
<tr><td>key</td><td>string</td><td>アクションのキー</td></tr>
<tr><td>name</td><td>string</td><td>アクションの名前</td></tr>
<tr><td>routes</td><td>(string|RegExp)[]</td><td>アクションを実行するパス</td></tr>
<tr><td>run</td><td>function</td><td>アクションで実行する関数</td></tr>
</table>

### ページ
アクションを実行する対象のウェブページを、ページとして定義します。  
ページはdocumentのラッパークラスで、エレメントを取得するための関数を持っています。

```js
class {
  constructor (document) {
    this.document = document
  }

  getHeaderElement () {
    const element = this.document.querySelector('.headerContainer')
    return new HeaderElement(element)
  }
}
```

### エレメント
ウェブページ内の要素を、エレメントとして定義します。  
エレメントはHTMLElementのラッパークラスで、DOM操作のための関数を持っています。

```js
class {
  constructor (element) {
    this.element = element
  }

  setAttribute (name, value) {
    this.element.setAttribute(name, value)
  }
}
```

## 機能を追加する方法
ここでは、すべてのページに対してヘッダーを固定する機能を追加する場合の例を示します。

### パスを追加
アクションを実行するパスが`app/scripts/modules/paths.json`ファイルに定義されていなければ、追加します。  
パスは正規表現形式で定義します。

`app/scripts/modules/paths.json`:

```json
{
  "all": "^.*$"
}

```

### ページを追加
アクションを実行するページが`app/scripts/pages`ディレクトリに存在しなければ、追加します。

`app/scripts/pages/common.js`:

```js
import { HeaderElement } from './elements'

export default class {
  constructor (document) {
    this.document = document
  }

  getHeaderElement () {
    const element = this.document.querySelector('.headerContainer')
    return new HeaderElement(element)
  }
}
```

ページを追加したら、`app/scripts/pages/index.js`ファイルにも追加します。

`app/scripts/pages/index.js`:

```js
export { default as CommonPage } from './common'
```

### アクションを追加
`app/scripts/actions`ディレクトリに、アクションを追加します。

`app/scripts/actions/fix-header.js`:

```js
import { paths } from '../modules'
import { CommonPage } from '../pages'

export default {
  key: 'fix_header',
  name: 'ヘッダーを固定',
  routes: [
    paths.all
  ],
  run: (config) => {
    const page = new CommonPage(document)
    const header = page.getHeaderElement()
    header.setAttribute('data-qiita-team-plus-fix-header', 'header')
  }
}
```

アクションを追加したら、`app/scripts/actions/index.js`ファイルにも追加します。

`app/scripts/actions/index.js`:

```js
export { default as fixHeader } from './fix-header'
```

#### 設定
`run`関数は、引数で`config`を受け取ります。  
`config`には、アクション実行時の設定が以下のようなオブジェクト形式で格納されています。

```js
{
  fix_header: true
}
```

#### DOM操作
DOM操作は直接記述してもかまいませんが、定義済みのページを使用するとコードが簡潔になります。

#### スタイル
スタイルは、`app/styles/contentsscript.css`ファイルに記述します。  
アクション内でスタイルを適用したい要素に`data-qiita-team-plus-<アクションのキーのケバブケース>`という属性をつけ、CSSのセレクタで使用します。

```css
[data-qiita-team-plus-fix-header="header"] {
  position: sticky;
  top: 0;
  z-index: 999;
}
```

### 設定を更新
`app/scripts/modules/default-config.json`ファイルに、アクションのキーを追加します。

```json
{
  "fix_header": true
}
```

`app/pages/options.html`ファイルに、アクションの設定項目を追加します。

```html
<body>
  <div id="app">
    <h2>すべての画面</h2>
    <div>
      <app-checkbox
        v-model="actions.fix_header.value"
        :label="actions.fix_header.name"
        @input="onUpdate"></app-checkbox>
    </div>
    <div>
      <button @click="save">保存</button>
      <span
        v-if="status"
        v-text="status"></span>
    </div>
  </div>
  <script src="../scripts/options.js"></script>
</body>
```

## リリース手順
### バージョンを更新
[Semantic Versioning](https://semver.org/lang/ja/)にしたがって、パッケージのバージョンを更新します。

- メジャー

```sh
$ npm run release:major
```

- マイナー

```sh
$ npm run release:minor
```

- パッチ

```sh
$ npm run release:patch
```

このとき、`package-lock.json`のバージョンは更新されないので、手動で更新します。

### パッケージをビルド
```sh
$ npm run build
$ zip -r dist/chrome.zip dist/chrome
```

### Developer Dashboardからリリース
[Developer Dashboard](https://chrome.google.com/webstore/devconsole/)から、新しいパッケージをアップロードします。  
機能の更新がある場合は、詳細説明やスクリーンショットも更新します。
