/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Player", {
    superClass: "tm.display.CanvasElement",

    width: 16,
    height: 16,

    //状態フラグ
    control: false, //操作可能フラグ
    shotON: true,   //ショットフラグ
    mouseON: false, //マウス操作中フラグ

    isDead: false,      //やられた
    isGround: false,    //地上にいるフラグ

    isStartup: false,   //スタート演出中
    isCollision: false, //当り判定有効フラグ
    isDemo: false,      //デモンストレーションフラグ

    timeMuteki: 0,  //無敵フレーム残り時間
    timeGround: 0,  //地上にいる時間

    _angle: 0,

    init: function() {
        this.superInit();

        //アニメーションスプライト
        this.sprite = tm.display.AnimationSprite(tmapp.SpriteSheet.Hiyoko)
            .addChildTo(this)
            .setScale(4)
            .gotoAndPlay("test");

        this.time = 0;
        return this;
    },

    update: function() {
        this.x = Math.sin(this._angle*toRad)*250+SC_W/2;
        this.y = Math.cos(this._angle*toRad)*250+SC_H/2;
        this.time++;
    },

    setAngle: function(angle) {
        angle = angle % 360;
        if (angle < 0) angle += 360;
        this._angle = angle;

        this.sprite.rotation = -this._angle;
    },
});

tmapp.Player.prototype.accessor("angle", {
    "get": function()   { return this._angle; },
    "set": function(v)  { this.setAngle(v); }
});

})();