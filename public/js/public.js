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

        if($(this).attr("id")=="btn-login"){
            $(".no-login").css("display","none");
            $(".no-login").sibling().css("display","block");
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

    $($("input").focus())

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

};