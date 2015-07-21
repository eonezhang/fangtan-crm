$(function(){
	var d_height = $(document).height();
	var w_height = $(window).height();
	if(d_height > w_height){
		w_height = d_height;
	}
	
	$('.left-nav').css('height',w_height);
	var right_height = w_height -65;
	$('.right-content').css('height',right_height);

	//导航的伸缩
	$(document).on('click','.menu-li',function(event){
		event.preventDefault();
		var child_ul = $(this).next('ul');
		if(child_ul.css('display') == 'none'){
			child_ul.slideDown();
		}else{
			child_ul.slideUp();
		}
		
	});
});