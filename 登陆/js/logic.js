/**
 * Created by 张凯 on 2018/7/2.
 */
$(function () {
    $(".qc").hide();
    $("#header_first").click(function () {
        $("#header_section a").removeClass("header_color");
        $("#header_first a").addClass("header_color");
        $(".qc").hide();
        $(".mc").show();
    });
    $("#header_section").click(function () {
        $(".qc").show();
        $(".mc").hide();
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

    // $("input[type=text]").focus(function () {
    //    $("label:eq(0)").addClass("logic-user");
    // });


    function user () {
       var username=$("#userName").val();
        var code=$("#code");
        if(username==""){
            code.html("账号不能为空!")
            return false;
        }
        if(username.length<6){
            code.html("账号不能小于6位")
            return false;
        }

        return true;
    };
    function pwd() {
        var password=$("#pwd").val();
        var code=$("#code");

        if(password==""){
            code.html("密码不能为空！")
            return false;
        }
        return true;
    };
    function puanDanUser() {
        var code=$("#code");
        var username=$("#userName").val();
        var password=$("#pwd").val();
        var n="qq123456";
        var p="123456";

        if(username!=n&&password!=p||username!=n||password!=p){
            code.html("账号密码输入错误！")
            return false;
        }
            alert("欢迎进入天猫");
            return true;

    }
    $("#biaodan").submit(function () {
       var Flag=true;
        $("#div_changmian").addClass("div_changmian-style");
       if(!user()) {
           Flag = false;
           return Flag;
       }
       if(!pwd()) {
           Flag = false;
           return Flag;
       }
       if(!puanDanUser()) {
           Flag = false;
           return Flag;
       }
        // $("#div_changmian").removeClass("div_changmian-style");
       return Flag;
    });




});