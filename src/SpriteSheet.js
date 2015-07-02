/*
 *  SpriteSheet.js
 *  2015/05/22
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tmapp.SpriteSheet = {};

//スプライトシート作成
tmapp.createSpriteSheet = function() {

    tmapp.SpriteSheet.Hiyoko = tm.asset.SpriteSheet({
        image: "hiyoko",
        frame: {
            width: 32,
            height: 32,
            count: 3,

            trimX: 96,
            trimY: 32,
            trimW: 96,
            trimH: 32,
        },
        animations: {
            "test": {
                frames:[0,1,2],
                next: "test",
                frequency: 5,
            },
        },
    });
};


})();