# iwara_renamer
## iwara保存ファイル名を整形する
- 通常保存ファイル名　→　ユーザ名 - タイトル (ID) #yyyymmdd.mp4
- JDownloader2ファイル名 → ユーザ名 - タイトル (ID).mp4

## 導入方法
- 本ツールを任意のディレクトリに展開
- node.jsをインストールする（方法はググるなどで調べてください）
- npm i　→　必要なライブラリがダウンロードされる

## 利用方法
```
node (インストールパス名)iwara_rename.js
```

 (例)　ツールを展開したディレクトリがC:\toolの場合
``` 　node C:\tool\iwara_rename.js```
 　→実行ディレクトリに存在するファイル名を整形

## JDwonloader2ユーザー用のリネーム設定
　JDownloader2のイベントスクリプトの：トリガー＝「パッケージャのフック時」に以下の内容を追加することで
　ダウンロード時に整形出来る
 
　jd2_event_script_rename_iwara.txt
