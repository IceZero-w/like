$(function(){
	$('.login').on('click',function(){
		$('.reg-body').hide();
		$('.log-body').show();
		$('.login').addClass("red");
		$('.register').removeClass("red");
		$('.register').addClass("greey");
		$('.email').val("");
	              $('.psd').val("");
	              $('.code').val("");
	})
	$('.register').on('click',function(){
		$('.log-body').hide();
		$('.reg-body').show();
		$('.register').addClass("red");
		$('.login').removeClass("red");
		$('.login').addClass("greey");
		$('.email').val("");
	              $('.psd').val("");
	              $('.code').val("");	
	})
	$('.email').on('click',function(){
		$('.email').css("border","1px solid #98a1a6");
		$('.psd').css("border","1px solid #d0d6d9");
		$('.code').css("border","1px solid #d0d6d9");
	})
	$('.psd').on('click',function(){
		$('.email').css("border","1px solid #d0d6d9");
		$('.psd').css("border","1px solid #98a1a6");
	})
	$('.code').on('click',function(){
		$('.email').css("border","1px solid #d0d6d9");
		$('.code').css("border","1px solid #98a1a6");
	})
})