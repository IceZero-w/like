$(function(){
	$(window).on('scroll',function(){
		if($(window).scrollTop()>172.5){
			$('.search form').css({
				'position':'fixed'
				,'top':'12.5px'
				,'left':'50%'
				,marginLeft:'-250px'
				,"z-index":"11"
			});
			$('.nav2').show();
		}else{
			$('.search form').css({'position':'relative','top':0})
			$('.nav2').hide();
		}
	})
})