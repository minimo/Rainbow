/*
 *  CdvAdmob.js
 *  2015/05/13
 *  @auther minimo  
 *  This Program is MIT license.
 */

//AdMob使用フラグ
USE_ADMOB = true;

//AdMob使用可能フラグ
ENABLE_ADMOB = false;
DEBUG_ADMOB = false;
TEST_ADMOB = false;

var ad_units = {
    ios: {
        banner:       '/6253334/dfp_example_ad',
        interstitial: '/6253334/dfp_example_ad/interstitial'
    },
    android: {
        banner:       '/6253334/dfp_example_ad',
        interstitial: '/6253334/dfp_example_ad/interstitial'
    },
    test: {
        banner:       '/6253334/dfp_example_ad',
        interstitial: '/6253334/dfp_example_ad/interstitial'
    }
};
// select the right Ad Id according to platform
var admobid = (TEST_ADMOB)? ad_units.test:( /(android)/i.test(navigator.userAgent) )? ad_units.android: ad_units.ios;

// AdMob CallBack
var onBannerLeaveApp = function(result) {
    if (DEBUG_ADMOB) AdvanceAlert('OnBannerLeaveApp\n'+result);
}

var onBannerDismiss = function(result) {
    if (DEBUG_ADMOB) AdvanceAlert('OnBannerDismiss\n'+result);
}

var onInterstitialPresent = function(result) {
    if (DEBUG_ADMOB) AdvanceAlert('onInterstitialPresent\n'+result);
}

var onInterstitialLeaveApp = function(result) {
    if (DEBUG_ADMOB) AdvanceAlert('onInterstitialLeaveApp\n'+result);
}

var onInterstitialDissmiss = function(result) {
    if (DEBUG_ADMOB) AdvanceAlert('onInterstitialDissmiss\n'+result);
}

//AdMob Event listener
document.addEventListener('onBannerLeaveApp', onBannerLeaveApp, false);
document.addEventListener('onBannerDismiss', onBannerDismiss, false);
document.addEventListener('onInterstitialPresent', onInterstitialPresent, false);
document.addEventListener('onInterstitialLeaveApp', onInterstitialLeaveApp, false);
document.addEventListener('onInterstitialDissmiss', onInterstitialDissmiss, false);
