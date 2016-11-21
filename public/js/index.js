/**
 * Created by Administrator on 2016/11/7.
 */



//轮播图
var mySwiper = new Swiper ('.swiper-container', {
	// 如果需要分页器
	pagination: '.swiper-pagination',

	autoplay:3000,
	speed: 500

});

//搜索框点击样式
$(".text-search" ).click(function(){
	$(".search-show" ).css("display","block");
	$("input").val("");

});
$(".search-show-text" ).click(function(){
	$(".search-show" ).hide();
});

//上滑动样式
$("#home").scroll(floor);
function floor(){

	var scrollTop=$(this).scrollTop();
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
}

//回到顶部样式
$("#return-top" ).click(function(){
	$(".page-box" ).animate({
		"scrollTop":0
	},100)
});

// 收藏样式
$(".contain-love").click(function () {

	if($(this).hasClass("contain-love-active")){
		$(this).removeClass("contain-love-active");
	}else{
		$(this).addClass("contain-love-active");
	}
});
$(".contain-love2").click(function () {
	if($(this).hasClass("contain-love2-active")){
		$(this).removeClass("contain-love2-active");
	}else{
		$(this).addClass("contain-love2-active");
	}
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

	var id=$(this ).data("target-id");
	$("#"+id ).show();
	$("#"+id ).siblings().hide();

});

//----------------------------------


