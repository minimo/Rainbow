/*
 *  main.js
 *  2014/06/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
 
//乱数発生器
mt = new MersenneTwister();
var rand = function(min, max) { return mt.nextInt(min, max); };    //乱数発生

//定数
//デバッグフラグ
DEBUG = false;

//スクリーンサイズ
SC_W = 640;
SC_H = 1136;

//Use MEDIA TYPE
MEDIA_ASSET = 0;    //tmlib Asset
MEDIA_CORDOVA = 1;  //CordovaMediaPlugin
MEDIA_LLA = 2;      //LawLatencyAudioPlugin

//デフォルトメディアタイプ
MEDIA_DEFAULT = MEDIA_ASSET;

//フレームレート
fps = 30;
var sec = function(s) { return ~~(fps * s);}    //秒からフレーム数へ変換

//インスタンス
appMain = {};

//アプリケーションメイン
tm.main(function() {
    appMain = tmapp.CanvasApp("#world");
    appMain.run();
});
