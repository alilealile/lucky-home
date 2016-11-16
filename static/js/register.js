/**
 * Created by administration on 2016/11/13.
 */

//获取验证码
$(".get-code" ).click(function getcode(){

    //第一步：先缓存旧标签到 data -cachelabel
    var old=$(this ).text();
    $(this ).data("data-cachelabel",old);
    $(this ).attr("disabled","disabled");

    //第二步：开启一个循环计时器
    //当最后一秒时，将按钮标签还原，并且停止计时器
    var temp=$(this ).data("loading");
    var time=$(this ).data("time") - 0;
    var elapsed=0;

    var target=$(this);
    timerHandler();
    var timeid=setInterval(timerHandler,1000);

    function timerHandler()
    {
        if(elapsed>=time){
            //最后一次
            target.removeAttr("disabled");
            target.text(old);
            clearInterval(timeid);
        }
        else
        {
            //使用 elapsed 替换
            var cur=time - elapsed;

            //"{d}秒后重新请求"
            var content=temp.replace("{d}",cur+"");
            target.text(content);
        }
        elapsed++;
    }
});


//登录验证
$("#form-login input").keyup(checkloginform);
function checkloginform() {

    var  usernameval=$("#username").val();
    var  passwordval=$("#password").val();

    var targetid=$("#form-login").data("target-id");

    if (usernameval!="" && passwordval!="") {
        $("#"+targetid).removeAttr("disabled").addClass("btn-orange");

    } else {
        $("#"+targetid).attr("disabled", "").removeClass("btn-orange");

    }
}
$("#form-register input").keyup(checkregisterform);
function checkregisterform() {


    var val1=$("#usernameregister").val();
    var val2=$("#ipt-getcode").val();
    var val3=$("#write-password").val();
    var val4=$("#sure-password").val();
    var val5=$("#ipt-data2").val();


    var targetid=$("#form-register").data("target-id");

    if(val1!=""&&val2!=""&&val3!=""&&val4!=""&&val5!=""){
        $("#"+targetid).removeAttr("disabled").addClass("btn-orange");
    }else{
        $("#"+targetid).attr("disabled", "").removeClass("btn-orange");
    }


}

