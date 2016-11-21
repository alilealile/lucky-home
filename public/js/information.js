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


// 点击接单
$(".btn-order" ).click(function (e) {
	e.stopPropagation();
	var target=$(this);
	changtextHandler(target);
});

//预约页，为接单的，点击接单按钮
function changtextHandler(target) {
	//点击内容改变  (定死了，只能做一个，？？？？ )
	target.parents(".order-main").data("target-page", "order__finish");
	//文字改变
	var text = $("#click-changetext").data("target-text");
	$("#click-changetext").addClass("order-text4").removeClass("btn-order").text(text);
}

// 取消订单页，其他原因
$(".chkchoose" ).click(function(){
	if(this.checked){
		$(".choose" ).slideDown();
	}else{
		$(".choose" ).slideUp();
	}
});






//选择是否现房，是否含发票
$(".ischeck-bg").click(function () {

	if($(this).hasClass("house-attr-active")){
		$(this).removeClass("house-attr-active");
	}else{
		$(this).addClass("house-attr-active");
	}
});

//只能选唯一的
$(".isonlycheck-bg").click(function () {
	$(this).siblings().removeClass("house-attr-active");
	$(this).addClass("house-attr-active");
});

//-------------------------------------------------------------------
//文件上传
$(".click-file" ).click( function(){
	var targetId=$(this ).data("target-id");
	$("#"+targetId ).trigger("click");
})

