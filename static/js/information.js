/**
 * Created by Administrator on 2016/11/8.
 */




/*信息页*/
$(".information-nav li" ).click(function(){
	$(this ).siblings().removeClass("active");
	$(this).addClass("active");

	var targetId=$(this ).data("target-id");
	$( ".click-all" ).hide();
	$("#"+targetId ).show();
});

//---------------------------------------
/*1预约页面*/
$(".contain-ul li" ).not(".contain-li4").click(function(){
	var targetId=$(this ).parent().data("target-id");
	$( this ).parents( ".footer" ).siblings().removeClass("pageZindex");
	$("#"+targetId ).addClass("pageZindex");
});

$(".btn-order" ).click(changtextHandler );

//预约页，为接单的，点击接单按钮
function changtextHandler(  )
{
	//点击内容改变  (定死了，只能做一个，？？？？ )
	$(".clickchangetarget" ).data("target-id","order-finish");
	//文字改变
	var text=$("#click-changetext").data("target-text");
	$("#click-changetext").addClass("order-text4" ).removeClass("btn-order" ).text(text);
}

	//按钮点击，加一页就好
$(".btnclick-opacity" ).click(function(){
	var targetId=$(this ).data("target-id");
	$("#"+targetId ).addClass("pageZindex");

	//按钮点击，弹出的消失就好
	$(".btnclick-none" ).click(function(){
		$("#"+targetId).removeClass("pageZindex");
	});
});

$(".chkchoose" ).click(function(){
	if(this.checked){
		$(".choose" ).slideDown();
	}else{
		$(".choose" ).slideUp();
	}
});

//-----------------------------------------
//发布页
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

$(".contain-love").click(function () {

	if($(this).hasClass("contain-love-active")){
		$(this).removeClass("contain-love-active");
	}else{
		$(this).addClass("contain-love-active");
	}
});
$(".contain-love2").click(function () {

	if($(this).hasClass("contain-love2-active2")){
		$(this).removeClass("contain-love2-active");
	}else{
		$(this).addClass("contain-love2-active");
	}
});


//选择是否现房，是否含发票
$(".ischeck-bg").click(function () {

	if($(this).hasClass("house-data-active")){
		$(this).removeClass("house-data-active");
	}else{
		$(this).addClass("house-data-active");
	}
});
//只能选唯一的
$(".isonlycheck-bg").click(function () {
	$(this).siblings().removeClass("house-data-active");
	$(this).addClass("house-data-active");

});

//-------------------------------------------------------------------
//文件上传
$(".click-file" ).click( function()
{
	var targetId=$(this ).data("target-id");
	$("#"+targetId ).trigger("click");
});


window.onpopstate = function(){

	console.log( 1 );
	var statePage = history.state.state;

	$( "body").children().removeClass("pageZindex");
	$(statePage).addClass("pageZindex");


	//导航栏的选择
	var id=statePage+"-nav";
	$(id ).siblings().removeClass("footer-nav-li");
	$(id ).addClass("footer-nav-li");
};
