/*
 *  TitleScene.js
 *  2014/06/19
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */

tm.define("tmapp.TitleScene", {
    superClass: tm.app.Scene,

    //フォントパラメータ
    labelParam: {fontFamily:"Orbitron", align: "center", baseline:"middle", outlineWidth:2, fontWeight:700 },
    scoreParam: {fontFamily:"Orbitron", align: "left", baseline:"middle", outlineWidth:2 },

    bgColor: 'rgba(50, 150, 50, 1)',

    init: function() {
        this.superInit();
        this.background = "rgba(0, 0, 0, 0.0)";

        //バックグラウンド
        this.bg = tm.display.RectangleShape({width: SC_W, height: SC_H, fillStyle: appMain.bgColor, strokeStyle: appMain.bgColor})
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5)

        tm.display.OutlineLabel("SAMPLE", 80)
            .addChildTo(this)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, SC_H*0.3);

        var lb = tm.display.OutlineLabel("touch start", 50)
            .addChildTo(this)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, SC_H*0.8);
        lb.tweener.clear().wait(300).to({alpha:0}, 1000, "easeInSine").wait(100).to({alpha:1}, 1000, "easeOutSine").setLoop(true);
            

        //目隠し
        this.mask = tm.display.RectangleShape({width: SC_W, height: SC_H, fillStyle: "rgba(0, 0, 0, 1.0)", strokeStyle: "rgba(0, 0, 0, 1.0)"})
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5);
        this.mask.tweener.clear().fadeOut(300);
        
        this.time = 0;
    },

    onresume: function() {
    },

    update: function() {
        //スクリーンショット保存
        var kb = appMain.keyboard;
        if (kb.getKeyDown("s")) appMain.canvas.saveAsImage();

        this.time++;
    },

    //タッチorクリック開始処理
    ontouchstart: function(e) {
    },

    //タッチorクリック移動処理
    ontouchmove: function(e) {
    },

    //タッチorクリック終了処理
    ontouchend: function(e) {
        tm.sound.WebAudio.unlock();
        appMain.pushScene(tmapp.MainScene());
    },
});
