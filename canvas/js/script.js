/*global $*/
/*global Chart*/

//logo
$(window).on('load',function() {
    $("#logo0").animate({
        "opacity": "1"
    }, 100)
    $("#logo1").animate({
        "height" : "400px"
    }, 500),
    $("#logo2").delay(400).animate({
       "width": "600px" 
    }, 500),
    $("#logo3").delay(800).animate({
        "height": "600px"
    }, 500),
    $("#logo4").delay(1200).animate({
        "width": "600px"
    }, 500)
});
/*
//Logoをフェードアウトさせる
$(function() {
    var h = $(window).height(); //ブラウザウィンドウの高さを取得
    $('.top').css('display','none'); //初期状態ではメインコンテンツを非表示
    $('.loader-bg ,#loader').height(h).css('display','block'); //ウィンドウの高さに合わせでローディング画面を表示
    $('#loader-bg').delay(900).fadeOut(800); //または、$('#loader-bg').fadeOut(800);でも可
    $('#loader').delay(600).fadeOut(300,function(){}); //または、$('#loader').fadeOut(300);でも可
    $('#main-contents').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});
*/