/**
 * Created by 张世豪 on 2018/7/4.
 */
$(function () {
    $("#userinfo ul li:first-child").mouseover(function () {
        $(".header-user").show();
    }).mouseout(function () {
        $(".header-user").hide();
    });
    $("#userinfo ul li:nth-child(2)").mouseover(function () {
       $(".user-info").show();
       $(this).css("background-color","white");
    }).mouseout(function () {
        $(".user-info").hide();
        $(this).css("background-color","rgb(245,245,245)");
    });
    $("#userinfo ul li:nth-child(5)").mouseover(function () {
        $(".myBao-show").show();
        $(this).css("background-color","white");
    }).mouseout(function () {
        $(".myBao-show").hide();
        $(this).css("background-color","rgb(245,245,245)");
    });
    $("#userinfo ul li:nth-child(7)").mouseover(function () {
        $(".love-show").show();
        $(this).css("background-color","white");
    }).mouseout(function () {
        $(".love-show").hide();
        $(this).css("background-color","rgb(245,245,245)");
    });
    $("#userinfo ul li:nth-child(9)").mouseover(function () {
        $(".center-show").show();
        $(this).css("background-color","white");
    }).mouseout(function () {
        $(".center-show").hide();
        $(this).css("background-color","rgb(245,245,245)");
    });
    // $("#userinfo ul li:nth-child(11)").mouseover(function () {
    //     $(".web-all").show();
    //     $(this).css("background-color","white");
    // }).mouseout(function () {
    //     $(".web-all").hide();
    //     $(this).css("background-color","rgb(245,245,245)");
    // });
    $(".bao ul li a:first-child").mouseover(function () {
       $(".bao .bao-cat").show();
    }).mouseout(function () {
        $(".bao-cat").hide();
    });
    $(".input input").focus(function () {
        $(".input b").hide();
    }).focusout(function(){
       $(".input b").show();
    });
    $(".input ipnut").click(function () {
       $(this).css("border-color:none");
    });
    $(".shop-color").mouseover(function () {
       $(this).css("border","1px dashed rgb(255,102,0)");
       $(".shop-color-update").show();
    }).mouseout(function () {
        $(this).css("border"," none");
        $(".shop-color-update").hide();
    });
    $(".shop-info-bottom").mouseover(function () {
       $(".other-bao a").show();
    }).mouseout(function () {
        $(".other-bao a").hide();
    });
});