/**
 * Created by Administrator on 2016/11/18.
 */

(function ($) {

     $(function(){
         var doc=location.pathname.split('/');
         var index=doc.length-1;
         var targetId=doc[index];
         if(targetId=="index.html"){
             var time=setTimeout(function(){
                $("#welcome").trigger("click");
            },3000);
        }

     });

    // 返回
    $(".click-return" ).click(function(){
        history.go(-1);
    });
//点击页面跳转
    $(".btnclick" ).click(function(){
        var target=$(this);
        jumpPage(target);

       /* 登录*/
        if($(this).attr("id")=="btn-login"){
            sessionStorage.user=$("#username").val();
        }
        /*退出登录*/
        if($(this).attr("id")=="exit-login"){
            sessionStorage.clear();
        }


    });


    function jumpPage(target) {
        var targetPage=target.data("target-page");
        var targetDoc=target.data("target-doc");
        var pathname=targetDoc+"/"+targetPage+".html"
        location.pathname=pathname;
    }



// 确认按钮点击,弹出框
    $(".click-pop").click(function () {
        var targetId=$(this).data("target-id");
        $("#"+targetId).css("display",'block');

        $("#btn-pop-time").css("display",'block');
        $("#btn-pop-time").siblings().css("display",'none');
    })
    $(".click-cancelpop").click(function () {
        var targetId=$(this).data("target-id");
        $("#"+targetId).css("display",'none')
    })
    $(".click-surepop").click(function () {
        var targetId=$(this).data("target-id");
        $("#"+targetId).css("display",'block');
        $("#"+targetId).siblings().css("display",'none');
    })


//选择身份
    $(".click-select").click(function () {
        //小图标点击，图标点击要出现的ul
        var targetId=$(this).data("target-id");
        $("#"+targetId).slideToggle();

        //出现的ul下的li的点击
        $("#"+targetId+" li").click(function(){
            $("#"+targetId).slideUp();
            //把li里的文字取出来
            var val=$(this).text();
            //找到要放的input
            var data=$("#"+targetId).data("target-id");
            $("#"+data).val(val);
        })

    });



}(jQuery))

// 底部nav加样式
window.onload = function(){
    var doc=location.pathname.split('/');
    var index=doc.length-2;
    var targetId=doc[index];

    $("#"+targetId).siblings().removeClass("footer-nav-li");
    $("#"+targetId).addClass("footer-nav-li");

    if(sessionStorage.user!==undefined){
        /*登录后的*/
        $(".no-login").css("display","none");
        $(".no-login").siblings().css("display","block");
        $(".mybox-inf2").text(sessionStorage.user);

        $("#welcome").data("target-page","home");
        $("#welcome").data("target-doc","index");
    }else{
        $(".no-login").css("display","block");
        $(".no-login").siblings().css("display","none");
        $("#welcome").data("target-page","login");
        $("#welcome").data("target-doc","login");
    }



};