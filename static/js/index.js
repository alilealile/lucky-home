/**
 * Created by Administrator on 2016/11/7.
 */


var  time=null;
$(function(){
	var statePage = location.href;

	if(statePage.split("#" ).length>1){

		//点刷新的时候能停在那页
		statePage=statePage.split("#")[1];
		$( "body").children().removeClass("pageZindex");
		$("#"+statePage).addClass("pageZindex");

		//底部导航栏的设置,颜色样式的设置
		var id=statePage+"-nav";
		$("#"+id ).siblings().removeClass("footer-nav-li");
		$("#"+id ).addClass("footer-nav-li");

	}else{

		//首页 等待3秒
		$("#welcome" ).addClass("pageZindex");

		time=setTimeout(function(){
			$("#welcome").trigger("click");
		},3000);
	}

});

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
	// 如果需要分页器
	pagination: '.swiper-pagination',

	autoplay:3000,
	speed: 500

});

//---------------------------------
//上滑动样式
$(".index-page").scroll(function(){

	var scrollTop=$(".index-page").scrollTop();

	if(scrollTop>=250){
		//搜索框固定
		$(".contain-top" ).addClass("upflow-contain-top");
		//nav导航固定
		$(".contain-nav-box" ).addClass("upflow-contain-nav");
		//详情页的固定
		$(".all-contain" ).addClass("upflow-all-contain");

		//增加返回顶部
		$("#return-top" ).addClass("up-top" );
		$(".footer" ).addClass("upflow-footer" );
	}else{
		$(".contain-top" ).removeClass("upflow-contain-top");

		$(".contain-nav-box" ).removeClass("upflow-contain-nav");
		$(".all-contain" ).removeClass("upflow-all-contain");


		$("#return-top" ).removeClass("up-top" );
		$(".footer" ).removeClass("upflow-footer" );
	}
});


//--------------------------------------
//回到顶部样式
$("#return-top" ).click(function(){
	$(".page-box" ).animate({
		"scrollTop":0
	},500)
});
//---------------------------------
//nav点击样式
$(".contain-nav li" ).click(function(){

	$(this ).siblings().removeClass("contain-nav-li");
	$(".contain-nav-select").stop().slideUp();

	var id=$(this ).attr("id");
	$("."+id ).stop().slideToggle(1000);

	if($(this).hasClass("contain-nav-li")){
		$(this).removeClass("contain-nav-li");
	}else{
		$(this).addClass("contain-nav-li");
	}

});
$(".contain-nav-select li" ).click(function(){

	if($(this ).parent().hasClass("contain-nav-li")){
		$(this ).parent().stop().slideUp();
		var id=$(this ).parent().data("target-id");
		$("#"+id).removeClass("contain-nav-li");
	}

});

$(function(){
	$(".more-click,.district-click" ).css("display","none");
	$("#minhan,#underground" ).css("display","block");
});
/*更多 多层选择*/
$(".all-more li" ).click(function(){

	$(".contain-nav-select").stop().slideUp();
	$(".contain-nav li").removeClass("contain-nav-li");
});
$(".more-ul1 li").bind("click",function(){

	$(this ).siblings().removeClass("contain-nav-li");
	$(this).addClass("contain-nav-li");

	var id=$(this ).data("target-id");
	$("#"+id ).show();
	$("#"+id ).siblings().hide();

});

//----------------------------------------
//搜索框点击样式
$(".text-search" ).click(function(){
	$(".search-show" ).css("display","block");
	$("input").val("");
});
$(".search-show-text" ).click(function(){
	$(".search-show" ).hide();
});

//--------------------------------------------------------------------
//底部样式
$(".footer-nav li").click(function(){
	var targetId=$(this ).data("target-id");

	$( "body").children().removeClass("pageZindex");
	$("#"+targetId ).addClass("pageZindex").scrollTop(0);

	$(this ).siblings().removeClass("footer-nav-li");

	$(this).addClass("footer-nav-li");

	//返回顶部删掉
	$(".footer" ).removeClass("upflow-footer" );


	history.pushState({state: '#'+targetId}, targetId, '#'+targetId);
});

//------------------------------------------------------------------------------------------------------
$(".btnclick" ).click(function(){

	var targetId=$(this ).data("target-id");
	$( "body").children().removeClass("pageZindex");
	$("#"+targetId ).addClass("pageZindex").scrollTop(0);

	//返回顶部删掉
	$(".footer" ).removeClass("upflow-footer" );

	//接单按钮点击后，子页面的确认
	if($(this ).hasClass("click-changetext")){changtextHandler()}


	if(targetId=="change-orderdata"){
		$(".btn-changeorder" ).focus();
	}
	if(targetId=="introduced-need"){
		$("#textareneed" ).focus();
	}
	//发布房源页面滚动条是0
	if(targetId=="introduced-house"){
		$(".houseall-infor").scrollTop(0);
	}
	$("input").val("");


	/*判断登录的*/
	var id=$(this).attr("id");
	if(id=="btn-login"){
		$(".no-login").css("display","none");
		$(".yes-login").css("display","block");
	}
	if(id=="exit-login"){
		$(".no-login").css("display","block");
		$(".yes-login").css("display","none");
	}

	if($(this ).closest(".welcome-page")){
		clearTimeout(time);
	}


	if(id=="btn-login"||id =="no-login"){
		var id=$(this ).data("target-id")+"-nav";
		$("#"+id ).siblings().removeClass("footer-nav-li");
		$("#"+id ).addClass("footer-nav-li");
	}


	history.pushState({state: '#'+targetId}, targetId, '#'+targetId);


});


