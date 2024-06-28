# website-contents

[Akashic 公式サイト][akashic-website] 用のコンテンツ置き場です。
[最新のリリース][release-latest] または [リリースページ][releases] からコンテンツの zip ファイルをダウンロードできます。

## release

PullRequest を作成後 `release` ラベルを付与してください。
対象の PullRequest が main ブランチにマージされるとリリースが実行されます。

## generate

次のコマンドを実行することで `./contents` 以下のすべてのディレクトリから `game.json` を自動で検出し、`./dist` ディレクトリに zip ファイルを生成します。

```sh
npm run generate
```

## test

次のコマンドでテストを実行します。

```sh
npm test
```

[akashic-website]: https://akashic-games.github.io/
[release-latest]: https://github.com/akashic-contents/website-contents/releases/latest
[releases]: https://github.com/akashic-contents/website-contents/releases
