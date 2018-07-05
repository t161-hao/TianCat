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
});