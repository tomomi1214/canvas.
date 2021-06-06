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
		$('#loading-page').fadeOut(1000);
	},2500);
});

//Header
$(function() {
    var header = $('#header');
    //表示位置
    var headerTop = header.offset().top;
    //ナビゲーションの高さ（シャドウの分だけ足してます）
    var headerHeight = header.height();
    var showFlag = false;
    header.css('top', -headerHeight+'px');
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        if (winTop >= (headerTop/2)) {
            if (showFlag == false) {
                showFlag = true;
                header.addClass('fixed').stop().animate({'top' : '0px'}, 200);
            }
        } else if (winTop <= headerTop) {
            if (showFlag) {
                showFlag = false;
                header.stop().animate({'top' : -headerHeight+'px'}, 200, function(){
                    header.removeClass('fixed');
                });
            }
        }
    });
});