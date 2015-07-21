
$(function(){
	$(".delist dt").click(function(){
		$(this).parent().children("dd").slideToggle()
	})

//detail page1
	$("#jsLeftBoard").children(".right-info").find("li").removeClass("active");
	$("#jsLeftBoard").children(".right-info").children("ul").find("li").eq(2).addClass("active");
	//楼盘详情页面的轮播图
	$("#jsThumb li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		var slideindex = $("#jsThumb li[class=active]").attr("index");
		$("#jsShowContent #jsShowBox ul li").removeClass("active");
		$("#jsShowContent #jsShowBox ul li[index="+slideindex+"]").addClass("active").find("img").animate({opacity:"1"},500);
		$("#jsShowContent #jsShowBox ul li:not(.active)").children("a").children("img").css("opacity","0");
	});
	$("#preThumb").click(function(){
		var sumThumbIndex = $("#jsThumb li").length;
		var slideindex = $("#jsThumb li[class=active]").attr("index");
		if(slideindex==1){
			$("#jsThumb li").removeClass("active");
			$("#jsThumb li[index="+sumThumbIndex+"]").addClass("active");
			$("#jsShowContent #jsShowBox ul li").removeClass("active");
			$("#jsShowContent #jsShowBox ul li[index="+sumThumbIndex+"]").addClass("active").find("img").animate({opacity:"1"},500);
			$("#jsShowContent #jsShowBox ul li:not(.active)").children("a").children("img").css("opacity","0");
		}else{
			$("#jsThumb li").removeClass("active");
			$("#jsThumb li[index="+(slideindex-1)+"]").addClass("active");
			$("#jsShowContent #jsShowBox ul li").removeClass("active");
			$("#jsShowContent #jsShowBox ul li[index="+(slideindex-1)+"]").addClass("active").find("img").animate({opacity:"1"},500);
			$("#jsShowContent #jsShowBox ul li:not(.active)").children("a").children("img").css("opacity","0");
		}
	});
	$("#nextThumb").click(function(){
		var sumThumbIndex = $("#jsThumb li").length;
		var slideindex = $("#jsThumb li[class=active]").attr("index");
		if(slideindex==sumThumbIndex){
			$("#jsThumb li").removeClass("active");
			$("#jsThumb li[index="+1+"]").addClass("active");
			$("#jsShowContent #jsShowBox ul li").removeClass("active");
			$("#jsShowContent #jsShowBox ul li[index="+1+"]").addClass("active").find("img").animate({opacity:"1"},500);
			$("#jsShowContent #jsShowBox ul li:not(.active)").children("a").children("img").css("opacity","0");
		}else{
			$("#jsThumb li").removeClass("active");
			$("#jsThumb li[index="+(slideindex*1+1*1)+"]").addClass("active");
			$("#jsShowContent #jsShowBox ul li").removeClass("active");
			$("#jsShowContent #jsShowBox ul li[index="+(slideindex*1+1*1)+"]").addClass("active").find("img").animate({opacity:"1"},500);
			$("#jsShowContent #jsShowBox ul li:not(.active)").children("a").children("img").css("opacity","0");
		}
	});
//detail 底部展示
$("#jsTabMenu").find("li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	//$(this).prev().css({borderRight:"none"})
	//var index=$(this).attr("index");
	$(".contents").eq($(this).index()).show().siblings().hide();
})
//chrome浏览器显示1px区别
var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1  
//var isChrome = window.google && window.chrome 
if(isChrome){
	$(".linear").css({position:"absolute",
		              bottom:"1px",
		              right:"0"
		          })
}








})