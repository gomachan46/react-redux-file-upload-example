# react-redux-file-upload-example

React+Redux環境に `react-dropzone` を入れてみてフロント側のファイルアップロードをして遊んでみるテスト

![react-dropzone](https://github.com/gomachan46/react-redux-file-upload-example/blob/master/react-dropzone.gif "react-dropzone")

## react-dropzone

https://github.com/okonet/react-dropzone

## install

```
npm install --save react-dropzone
```

## usage

```js
import Dropzone from 'react-dropzone'

// ...

<Dropzone
  onDrop={func}
  onDropAccepted={func}
  onDropRejected={func}
  accept="image/gif,image/jpeg,image/png,image/jpg" >
    <div>
      ファイルを指定またはドラッグ&ドロップ
      <p>形式: gif/png/jpeg/jpg</p>
    </div>
</Dropzone>
```

ファイル選択後に実行するコールバックに関してはonDropプロパティで指定できる。

ファイル形式の制限もacceptプロパティを使ってカンマ区切りで行える。

ファイル形式の制限に選択したファイルが全て則っていた場合はonDropAcceptedプロパティにて指定されたコールバックを実行し、則っていないファイルが一つでもあった場合にはonDropRejectedプロパティにて指定されたコールバックが実行される。

今回は指定してないが以下のような設定も可能

* 複数ファイルの選択を許可するか(multiple: デフォルトtrue)
* ウィンドウをクリックした時にアップロードファイルを選択する画面を表示するかどうか(disableClick: デフォルトfalse)
* プレビューを表示するかどうか(disablePreview: デフォルトfalse)

デザインに関しても外から好きに渡せるので、カスタマイズしてあげれば良さそう

* style 基本のstyle
* activeStyle acceptedな時のstyle
* rejectStyle rejectedな時のstyle

の三種類のstyleを渡せるようになっている。

styleを基本として、accepted/rejectedなstyleがマージされて適用されるイメージ。

本体のソースもとても小さいものなので一通り見ると良さそう

https://github.com/okonet/react-dropzone/blob/master/src/index.js

# 所感

一通りいじってみたけど特段苦労はしなかった感じ。

あとは今回はサーバーと繋いで実際にファイルのやり取りを行うところまでいけてないのでそのあたりで躓かなければスムーズっぽい。

サーバーとのやり取りのところも公式のREADMEにSuperAgentを用いたサンプルが出ているので割と楽には出来そうな感じはある。

