$(function(){
	var index=1;
	function showborder(number){
		$('.menu-nav ul li').eq(number-1).addClass('active').siblings().removeClass('active');
	}
	$('.menu-nav ul li a').on('click',function(){
		var newindex=parseInt($(this).attr('index'));
		index=newindex;
		showborder(index);
	})
})