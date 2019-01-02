// iwara保存ファイル名を整形する
// 通常保存ファイル名　→　ユーザ名 - タイトル (ID) #yyyymmdd.mp4
// JDownloader2ファイル名 → ユーザ名 - タイトル (ID).mp4

var glob = require('glob');
var fs = require('fs');
var iwara = require('./iwaraUtil.js');
var files = glob.sync('*');

files.forEach((fname) => {

    if (fs.lstatSync(fname).isFile()) {

        var newname = fname;

        // 通常保存ファイル名ルール（作成日エポック(秒単位）_ID_Source.mp4）を変更
        var ida = newname.match(/^(\d+)_([a-zA-Z0-9]{12,})_Source.mp4/);
        if (ida) {
            var datestr = new Date(parseInt(ida[1]*1000)).toISOString().replace(/[\-:]/g,'').replace(/T.*/,'');
            iwara.get_user_title(ida[2],function(user, title) {
                newname = user + " - " + title + " (" + ida[2].toLowerCase() + ") #" + datestr + ".mp4";
                renamer(fname,newname);
            })
        } else {
        // Jdownloader2命名ルールを変更（IDを後ろに）
            newname = newname.replace(/¿language=ja/, '');
            newname = newname.replace(/^(.+)_([a-zA-Z0-9]{12,})_(.+)\.mp4$/g, '$1 - $3 ($2).mp4');
            renamer(fname,newname);
        }
    }
})

function renamer(old_name,new_name) {

    if (old_name !== new_name) {
        console.log("RENAME:" + old_name);
        console.log("======>" + new_name);
        try {
            fs.statSync(new_name);
            console.log("SKIP:new name already exist.")
        } catch (e) {
            fs.renameSync(old_name, new_name);
        }
    }
}