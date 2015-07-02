/*
 *  MainScene.js
 *  2014/06/19
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */

tm.define("tmapp.MainScene", {
    superClass: tm.app.Scene,

    //マルチタッチ補助クラス
    touches: null,
    touchID: -1,

    //タッチ情報
    startX: 0,
    startY: 0,
    touchTime: 0,
    moveX: 0,
    moveY: 0,
    beforeX: 0,
    beforeY: 0,

    //経過時間
    time: 1,

    //遷移情報
    exitGame: false,

    //ラベル用パラメータ
    labelParamBasic: {fontFamily: "Yasashisa", align: "left", baseline: "middle",outlineWidth: 3, fontWeight:700},

    init: function(mode, retry) {
        this.superInit();
        this.background = "rgba(0, 0, 0, 0.0)";

        //バックグラウンド
        this.bg = tm.display.RectangleShape({width: SC_W, height: SC_H, fillStyle: appMain.bgColor, strokeStyle: appMain.bgColor})
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5)

        //マルチタッチ初期化
        this.touches = tm.input.TouchesEx(this);

        //レイヤー準備
        this.lowerLayer = tm.app.Object2D().addChildTo(this);
        this.mainLayer = tm.app.Object2D().addChildTo(this);
        this.upperLayer = tm.app.Object2D().addChildTo(this);

        //スコア表示
        var that = this;
        this.scoreLabel = tm.display.OutlineLabel("SCORE ", 40)
            .addChildTo(this)
            .setParam(this.labelParamBasic)
            .setPosition(8, 32);
        this.scoreLabel.score = 0;
        this.scoreLabel.update = function() {
            this.text = "SCORE "+this.score;
            if (this.score < that.score) {
                var s = ~~((that.score-this.score)/11);
                if (s < 3) s=3;
                this.score += s;
                if (this.score > that.score)this.score = that.score;
            }
        }

        //ポーズボタン
        this.pause = tm.extension.Button(200, 60, "PAUSE", {flat: true, fontSize:40})
            .addChildTo(this)
            .setPosition(SC_W*0.84, 90)
            .addEventListener("pushed", function() {
                appMain.pushScene(tmapp.PauseScene(this));
            }.bind(this));

        this.sprite = tm.display.AnimationSprite(tmapp.SpriteSheet.Hiyoko)
            .addChildTo(this)
            .setPosition(SC_W/2, SC_H/2)
            .setScale(4)
            .gotoAndPlay("test");

        //目隠し
        this.mask = tm.display.RectangleShape({width: SC_W, height: SC_H, fillStyle: "rgba(0, 0, 0, 1.0)", strokeStyle: "rgba(0, 0, 0, 1.0)"})
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5);
        this.mask.tweener.clear().fadeOut(200);
    },
    
    update: function() {
    },

    //ゲームオーバー
    gameover: function() {
    },

    ontouchesstart: function(e) {
    },

    ontouchesmove: function(e) {
    },

    ontouchesend: function(e) {
    },
});

