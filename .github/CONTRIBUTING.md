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
  run: () => {
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
class CommonPage {
  constructor (document) {
    this.document = document
  }

  getHeaderElement () {
    return HeaderElement.from(this.document)
  }
}
```

### エレメント
ウェブページ内の要素を、エレメントとして定義します。  
エレメントはHTMLElementのラッパークラスで、DOM操作のための関数を持っています。

```js
class HeaderElement {
  constructor (element) {
    this.element = element
  }

  static from (document) {
    const element = document.querySelector('.headerContainer')
    return new HeaderElement(element)
  }

  setAttribute (name, value) {
    this.element.setAttribute(name, value)
  }
}
```

## 機能を追加する方法
ここでは、すべてのページに対してヘッダーを固定する機能を追加する場合の例を示します。

### パスを追加
アクションを実行するパスが`app/scripts/paths.js`ファイルに定義されていなければ、追加します。  
パスは正規表現形式で、文字列または正規表現リテラルによって定義します。

`app/scripts/paths.js`:

```js
export default {
  all: '^.*$'
}
```

### ページを追加
アクションを実行するページが`app/scripts/pages/`ディレクトリに存在しなければ、追加します。

`app/scripts/pages/common/index.js`:

```js
import { HeaderElement } from './elements'

class CommonPage {
  constructor (document) {
    this.document = document
  }

  getHeaderElement () {
    return HeaderElement.from(this.document)
  }
}

export default CommonPage
```

ページを追加したら、`app/scripts/pages/index.js`ファイルにも追加します。

`app/scripts/pages/index.js`:

```js
import CommonPage from './common'

export {
  CommonPage
}
```

### アクションを追加
`app/scripts/actions`ディレクトリに、アクションを追加します。

`app/scripts/actions/fix-header.js`:

```js
import paths from '../paths'
import { CommonPage } from '../pages'

export default {
  key: 'fix_header',
  name: 'ヘッダーを固定',
  routes: [
    paths.all
  ],
  run: () => {
    const page = new CommonPage(document)
    const header = page.getHeaderElement()
    header.setAttribute('data-qiita-team-plus-fix-header', 'header')
  }
}
```

アクションを追加したら、`app/scripts/actions/index.js`ファイルにも追加します。

`app/scripts/actions/index.js`:

```js
import fixHeader from './fix-header'

export default {
  fixHeader
}
```

#### DOM操作
DOM操作は直接記述してもかまいませんが、定義済みのページを使用するとコードが簡潔になります。

#### スタイル
スタイルは、`app/styles/contentsscript.css`ファイルに記述します。  
アクション内でスタイルを適用したい要素に`data-qiita-team-plus-{アクションのキーのケバブケース}`という属性をつけ、CSSのセレクタで使用します。

```css
[data-qiita-team-plus-fix-header="header"] {
  position: sticky;
  top: 0;
  z-index: 999;
}
```

### 設定を更新
`app/scripts/defaultConfig.json`ファイルに、アクションのキーを追加します。

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
