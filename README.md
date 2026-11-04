# きゃりかつ(塙克樹)の公式サイトリポジトリ

サイトの設計からいろいろ勉強したくて2019年始めに作ったものを `Vue` `Nuxt` `Netlify` で書き直すもの。

前回は絶妙にダサいうえにサイト速度がとても遅かったのでそこを改善する

[きゃりかつツーム](https://www.hanakatsuruby.me/)

正直herokuで運用する意味もなかったので、移行を決心したのは偉いが決断が遅い。

URLにrubyって入れたけど、これが公開されたので `Ruby` がベースではなくなる。

`Sinatra` ベースから2020-04-25に完全に移行しました。

## Build Setup

Node.js 24 LTS（24.22.1）と Yarn Classic（1.x）を使用します。
Node.js のバージョンは `.nvmrc` に指定しています（Netlify もこの指定を使用）。
ビルドには `CTF_BLOG_POST_TYPE_ID`、`CTF_SPACE_ID`、`CTF_CDA_ACCESS_TOKEN` の環境変数が必要です。
ローカルでは `.env` から、Netlify では管理画面に設定した環境変数から読み込みます。
環境変数が設定されていれば `.env` ファイルは不要です。

Nuxt 2 / webpack 4 用の `sass-loader` は Sass の旧 JS API を使用するため、
`legacy-js-api` の非推奨警告だけを一時的に抑制しています。
これは API の移行ではありません。Sass 2 へ更新する前に、modern API 対応の
ビルド基盤へ移行し、`silenceDeprecations` の指定を削除してください。

``` bash
# use the project Node.js version (with nvm)
$ nvm install
$ nvm use

# install dependencies
$ yarn install --frozen-lockfile

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
