/**
 * Created by 张凯 on 2018/7/2.
 */
$(function () {
    $("#header_first").click(function () {
        $("#header_section a").removeClass("header_color");
        $("#header_first a").addClass("header_color");
    });
    $("#header_section").click(function () {
        $("#header_first a").removeClass("header_color");
        $("#header_section").find('a').addClass("header_color");
    });
    $("#header_first").hover(function () {
        $("#header_first a").addClass("header_color1");
    },function () {
        $("#header_first a").removeClass("header_color1");
    });
    $("#header_section").hover(function () {
        $("#header_section").find('a').addClass("header_color1");
    },function () {
        $("#header_section a").removeClass("header_color1");
    });
    $("#header_first a").addClass("header_color");

    //以上是标题的JS

    $(".qrcode-main").hover(function () {
       $(".img_1").stop().animate({"left":"0"},200,function () {
           $(".img_2").show();
       });
    },function () {
        $(".img_2").hide();
        $(".img_1").stop().animate({"left":"70"},200);
    });
    //以上是移动的图标

    // $(".mc").hide();


});