# iwara_renamer 人柱版：利用の前にバックアップをお願いします
## iwara保存ファイル名を整形する
- 通常保存ファイル名　→　ユーザ名 - タイトル (ID) #yyyymmdd.mp4

  例：
　 1532265697_JG1Y2cZZXyhwLzq3V_Source.mp4
  →　ansoh1 - セクシージュリ扇ダンス【モーション配布】 (jg1y2czzxyhwlzq3v) #20180722.mp4
- JDownloader2ファイル名(ユーザ名_ID_タイトル.mp4) → ユーザ名 - タイトル (ID).mp4

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
　JDownloader2のイベントスクリプトの：トリガー＝「パッケージャのフック時」に以下の内容を追加することでダウンロード時に自動整形できる
 
　jd2_event_script_rename_iwara.txt
