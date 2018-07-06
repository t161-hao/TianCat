/**
 * Created by 张凯 on 2018/7/5.
 */
$(function () {
    //  我的淘宝的点击事件
    $(".nav-one").eq(0).hover(function () {
        $(".container-ul1").show();
    },function () {
        $(".container-ul1").hide();
    });
    //收藏夹得点击事件
    $(".nav-one").eq(1).hover(function () {
        $(".container-ul2").show();
    },function () {
        $(".container-ul2").hide();
    });


});