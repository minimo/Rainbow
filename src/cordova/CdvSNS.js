/*
 *  CdvSNS.js
 *  2015/05/13
 *  @auther minimo  
 *  This Program is MIT license.
 */

//Social Message
ENABLE_SOCIAL = false;

/*
 *
 * Social Message
 *
 */

//SNSにメッセージを送（ゲームオーバー時）
var sendSocialMessage = function(mode, returnJoker, score) {
    if (!ENABLE_SOCIAL) return false;

    //メッセージテキストの作成
    var lb = "Normal";
    if (mode == GAMEMODE_HARD) lb = "Hard";
    if (returnJoker) lb += "_RJ";

    var url = "https://itunes.apple.com/jp/app/shottoganpoka/id951249463";
    var text = "ShotgunPoker Score:"+score+"pts("+lb+")【"+url+"】 #ShotgunPoker #SGP_"+lb;
    var message = {
        text: text,
//        activityTypes: ["PostToTwitter"],
    };
    window.socialmessage.send(message);
}

//SNSにメッセージを送る（総合情報）
var sendSocialMessageGlobal = function() {
    if (!ENABLE_SOCIAL) return false;

    var score = 0;
    var mode = GAMEMODE_NORMAL;
    var returnJoker = false;

    //ベストスコアはどれか
    var sc1 = appMain.highScore[GAMEMODE_NORMAL];
    var sc2 = appMain.highScore[GAMEMODE_NORMAL+10];
    var sc3 = appMain.highScore[GAMEMODE_HARD];
    var sc4 = appMain.highScore[GAMEMODE_HARD+10];
    var sc = [sc1, sc2, sc3, sc4];
    score = sc[0];
    for (var i = 1; i < sc.length; i++) {
        if (score < sc[i]) score = sc[i];
    }
    if (score == sc[0]) {mode = GAMEMODE_NORMAL; returnJoker = false;}
    if (score == sc[1]) {mode = GAMEMODE_NORMAL; returnJoker = true;}
    if (score == sc[2]) {mode = GAMEMODE_HARD;   returnJoker = false;}
    if (score == sc[3]) {mode = GAMEMODE_HARD;   returnJoker = true;}

    //メッセージテキストの作成
    var lb = "Normal";
    if (mode == GAMEMODE_HARD) lb = "Hard";
    if (returnJoker) lb += "-RJ";

    var url = "https://itunes.apple.com/jp/app/shottoganpoka/id951249463";
    var text = "ShotgunPoker MyBestScore:"+score+"pts("+lb+")【"+url+"】 #ShotgunPoker #SGP_Best";
    var message = {
        text: text,
//        activityTypes: ["PostToTwitter"],
    };
    window.socialmessage.send(message);
}
