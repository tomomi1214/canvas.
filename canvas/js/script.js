/*global $*/
/*global Chart*/

//logo
$(window).on('load',function() {
    $("#logo0").animate({
        "opacity": "1"
    }, 100)
    $("#logo1").animate({
        "height" : "400px"
    }, 300),
    $("#logo2").delay(400).animate({
       "width": "600px" 
    }, 300),
    $("#logo3").delay(700).animate({
        "height": "600px"
    }, 300),
    $("#logo4").delay(1000).animate({
        "width": "600px"
    }, 300)
});

//Logoをフェードアウトさせる
$(function() {
	setTimeout(function(){
		$('.loading-page').fadeOut(1000);
	},2500);
});

//Header
$(function() {
    var nav = $('.header');
    //表示位置
    var navTop = nav.offset().top;
    //ナビゲーションの高さ（シャドウの分だけ足してます）
    var navHeight = nav.height();
    var showFlag = false;
    nav.css('top', -navHeight+'px');
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        if (winTop >= navTop) {
            if (showFlag == false) {
                showFlag = true;
                nav
                    .addClass('fixed')
                    .stop().animate({'top' : '0px'}, 200);
            }
        } else if (winTop <= navTop) {
            if (showFlag) {
                showFlag = false;
                nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
                    nav.removeClass('fixed');
                });
            }
        }
    });
});