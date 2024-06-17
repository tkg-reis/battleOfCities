const fs = require("fs");
const csv = require("csvtojson");
const iconv = require('iconv-lite');

// ファイル加工モジュール csv => json
fs.readFile('./data/result.csv', async function(err, data){
    if (err) throw err;
    // console.log( data.toString('UTF-8') );    // (参考)UTF-8の場合はtoString()メソッドで文字列を取り出せる
    let buf    = new Buffer.from(data, 'binary');
    let retStr = iconv.decode(buf, "Shift_JIS"); //作成したバッファを使い、iconv-liteでShift-jisからutf8に変換
    const jsonArray = await csv().fromString(retStr);
    const jsonIndent = 2;
    const jsonStr = JSON.stringify(jsonArray, undefined, jsonIndent);
    fs.writeFileSync("./json/result.json", jsonStr);
});