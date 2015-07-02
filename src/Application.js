/*
 *  Application.js
 *  2015/03/10
 *  @auther minimo  
 *  This Program is MIT license.
 */

//namespace tmapp
tmapp = {
    core: null,
};

tm.define("tmapp.CanvasApp", {
    superClass: tm.app.CanvasApp,

    version: "0.0.1",

    //ＢＧＭ＆効果音
    bgm: null,
    bgmIsPlay: false,
    sounds: null,

    //バックグラウンドカラー
    bgColor: 'rgba(0, 0, 0, 1)',

    init: function(id) {
        this.superInit(id);
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = fps;
        this.background = "rgba(0, 0, 0, 0)";
        this.keyboard = tm.input.Keyboard(window);

        tmapp.core = this;

        //サウンドセット
        this.sounds = tm.extension.SoundSet();

        //設定情報の読み込み
        this.loadConfig();

        //アセット読み込み
        var loadingScene = tmapp.LoadingScene({
            assets: assets["main"],
            width: SC_W,
            height: SC_H,
            bgColor: 'rgba(0, 0, 0, 1)',
            nextScene: function() {
                this._onLoadAssets();
                return tmapp.TitleScene();
            }.bind(this)
        });
        this.replaceScene(loadingScene);
    },

    _onLoadAssets: function() {

        appMain.sounds.readAsset();
        tmapp.createSpriteSheet();

        //Admob setting
        if (ENABLE_PHONEGAP && USE_ADMOB && AdMob) {
            AdMob.createBanner({
                adId:admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER
            });
        }
    },

    exitApp: function() {
        this.stop();
    },

    //設定データの保存
    saveConfig: function() {
        return this;
    },

    //設定データの読み込み
    loadConfig: function() {
        return this;
    },

    playBGM: function(asset) {
        this.sounds.playBGM(asset);
        return this;
    },

    stopBGM: function() {
        this.sounds.stopBGM();
        return this;
    },

    pauseBGM: function() {
        this.sounds.pauseBGM();
        return this;
    },

    resumeBGM: function() {
        this.sounds.resumeBGM();
        return this;
    },

    playSE: function(asset) {
        this.sounds.playSE(asset);
        return this;
    },

    setVolumeBGM: function(vol) {
        this.sounds.setVolumeBGM(vol);
        return this;
    },

    setVolumeSE: function(vol) {
        this.sounds.setVolumeSE(vol);
        return this;
    },
});

tmapp.CanvasApp.prototype.accessor("volumeBGM", {
    "get": function() { return this.sounds.volumeBGM; },
    "set": function(vol) {
        this.setVolumeBGM(vol)
    }
});
tmapp.CanvasApp.prototype.accessor("volumeSE", {
    "get": function() { return this.sounds.volumeSE; },
    "set": function(vol) {
        this.setVolumeSE(vol)
    }
});


