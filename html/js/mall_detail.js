/**
*	楼盘中心js
*	@date 2015年4月16日11:25:11
*/
$(window).load(function(){
	action=$("#jsCustomForm").attr("index");
	if(action==1){
		layer.msg("添加失败",1,-1);
	}
});
//select跳转
function mbar(sobj) {
	var docurl =sobj.options[sobj.selectedIndex].value;
	if (docurl != "") {
	   open(docurl,'_self');
	   sobj.selectedIndex=0;
	   sobj.blur();
	}
}
$(function(){
	//默认推荐客户选中
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
	//楼盘中心的收藏
	$("#jsCollect").children(".item").children(".content").children(".fonts").children(".button").find("a:eq(0)").click(function(){
		i=$(this).attr("value");
		fava=$(this).attr("index");
		userid=$(this).attr("user");
		k=$(this).parent(".button").attr("index");
		if(fava==0){
		    if(userid!=0){
		       $.ajax({//保存地址
		            type:'post',
		            url:'index.php?itemid='+i+'&action=fave',
		            data:{i:i,u:userid},
		            dataType:'json',
		            success:function(result){
		                if(result==1){
                    		layer.msg('收藏成功',2,-1);
		                    $("#jsCollect").children(".item").eq(k).children(".content").children(".fonts").children(".button").find("a:eq(0)").html("已收藏");
		                }else if(result==3){
		                	layer.msg('已收藏',1,-1);
		                }else{
		                	layer.msg('收藏失败',1,-1);
		                }
		            }
		        });
		    }else{
		        self.location="http://"+window.location.host+'/member/login.php';
		    }
		}
	});
	//楼盘详情页面的收藏
	$("#jsFloor").children(".button").find("a").eq(0).click(function(){
		collect=$(this).attr("index");
		i=$(this).attr("value");
		userid=$(this).parent(".button").attr("index");

		if(collect==1){
			layer.msg("您已收藏",1,-1);
		}else{
		    if(userid!=0){
		       $.ajax({//保存地址
		            type:'post',
		            url:'index.php?itemid='+i+'&action=fave',
		            data:{i:i,u:userid},
		            dataType:'json',
		            success:function(result){
		                if(result==1){
                    		layer.msg('收藏成功',2,-1);
		                   	$("#jsFloor").children(".button").find("a").eq(0).html("已收藏");
		                }else if(result==3){
		                	layer.msg('您已收藏',1,-1);
		                }else{
		                	layer.msg('收藏失败',1,-1);
		                }
		            }
		        });
		    }else{
		        self.location="http://"+window.location.host+'/member/login.php';
		    }
		}
	});
	//楼盘详情页面的底部展示
	$("#jsFonts").children(".menus").find("li").click(function(){
		index=$(this).attr("index");
		$("#jsFonts").children(".menus").find("li").removeClass("active");
		$(this).addClass("active");
		$("#jsFonts").children(".contents").addClass("dis");
		$("#jsFonts").children(".contents").eq(index).removeClass("dis");
	});
	$("#jsBtn").click(function(){
		truename=$("#jsForm").children(".item").eq(1).children(".item-right").find("input").val();
		phone=$("#jsForm").children(".item").eq(2).children(".item-right").find("input").val();
		if(!truename){
			layer.msg("请输入被推荐人的姓名",1,-1);
			$("#jsForm").children(".item").eq(1).children(".item-right").find("input").focus();
		}else if(!phone){
			layer.msg("请输入被推荐人的电话",1,-1);
			$("#jsForm").children(".item").eq(2).children(".item-right").find("input").focus();
		}else if(phone.length!=11){
			layer.msg("被推荐人的电话格式不正确",1,-1);
			$("#jsForm").children(".item").eq(2).children(".item-right").find("input").focus();
		}else{
			$("#jsRecommend").submit();
		}
	});
	//客户删除
	$("#jsTable").children("tr").children("td").find(".del").click(function(){
		id=$(this).attr("index");
		k=$(this).attr("value");
		user=$("#jsTable").attr("index");
		if(user!=0){
			$.layer({
			    shade: [0],
			    area: ['auto','auto'],
			    dialog: {
		        msg: '您确定要删除该客户信息吗？',
		        btns: 2,                    
		        type: 4,
		        btn: ['确定','取消'],
		        yes: function(){
		            	$.ajax({//保存地址
        		            type:'post',
        		            url:'index.php?action=del',
        		            data:{id:id},
        		            dataType:'json',
        		            success:function(result){
        		                if(result==1){
        	                		layer.msg('删除成功',1,-1);
        	                		$("#jsTable").children("tr").eq(k).hide("slow");
        		                }else{
        		                	layer.msg('删除失败',1,-1);
        		                }
        		            }
        		        });
			        }
	    		}
			});
		}else{
			self.location="http://"+window.location.host+'/member/login.php';
		}
	});
	//添加客户信息
	$("#jsSave").click(function(){
		truename=$("#jsCustom").children(".item").eq(0).children(".item-right").find("input").val();
		phone=$("#jsCustom").children(".item").eq(1).children(".item-right").find("input").val();
		if(!truename){
			layer.msg("请输入被推荐人的姓名",1,-1);
			$("#jsCustom").children(".item").eq(0).children(".item-right").find("input").focus();
		}else if(!phone){
			layer.msg("请输入被推荐人的电话",1,-1);
			$("#jsCustom").children(".item").eq(1).children(".item-right").find("input").focus();
		}else if(phone.length!=11){
			layer.msg("被推荐人的电话格式不正确",1,-1);
			$("#jsCustom").children(".item").eq(1).children(".item-right").find("input").focus();
		}else{
			$("#jsCustomForm").submit();
		}
	});
	//选择客户
	$("#jsSelect").find("option").click(function(){
		id=$(this).attr("value");
		if(id!=0){
			$.get("index.php?action=custom_info",{"id":id},function(data){
				if(data){
					var jsObject = JSON.parse(data);
					$("#jsTruename").attr("value",jsObject.customname);
					$("#jsPhone").attr("value",jsObject.phone);
					$("#jsAim").attr("value",jsObject.aim);
					remark=jsObject.remark;
					$("#jsTextea").val(remark);

				}else{
					layer.msg("暂无相关数据",1,-1);
				}
	        });
		}else{
			$("#jsTruename").attr("value","");
			$("#jsPhone").attr("value","");
			$("#jsAim").attr("value","");
			$("#jsTextea").val("");
		}
	});
	$("#jsFont .contents:eq(0)").show().siblings(".contents").hide();
	//标签页
	$("#jsTabMenu ul li").click(function(){
		$("#jsTabMenu ul li").removeClass("active");
		$(this).addClass("active");
	    var index = $("#jsTabMenu ul li").index(this);
	   	$("#jsFont .contents:eq("+index+")").show().siblings(".contents").hide();
	});
})