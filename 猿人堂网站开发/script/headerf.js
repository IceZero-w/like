
	// $('.wrapper').hide();
	// $('.reg-body').hide();
	// $('.log-body').hide();
	$('.email').val("");
	$('.psd').val("");
	$('.code').val("");
	// 登录注册界面跳转
	$('.log-in').on('click',function(){
		// $('.wrapper').animate({
		// 	top:'70%' , opacity:1
		// },1000);
		$('.wrapper').show();
		$('.reg-body').hide();
		$('.log-body').show();
		$('.layer').show();
		$('.login').addClass("red");
		$('.register').removeClass("red");
		$('.register').addClass("greey");
		$('.email').val("");
	              $('.psd').val("");
	              $('.code').val("");
	              rand();
	})
	$('.reg').on('click',function(){
		// $('.wrapper').animate({
		// 	top:'70%' , opacity:1
		// },1000);
		$('.wrapper').show();
		$('.log-body').hide();
		$('.reg-body').show();
		$('.layer').show();
		$('.register').addClass("red");
		$('.login').removeClass("red");
		$('.login').addClass("greey");
		$('.email').val("");
	              $('.psd').val("");
	              $('.code').val("");
	              rand();
	})
	$('.close').on('click',function(){
		$('.layer').fadeOut('slow');
	 //              $('.wrapper').animate({
		// 	top:'0' , opacity:0
		// },500);
		$('.wrapper').hide();
	              $('.container').show();
	              $('.reg-body input').next().text(" ");
	              $('.log-body input').next().text(" ");
	})
	$('.layer').on('click',function(){
		$('.layer').fadeOut('slow');
	 //              $('.wrapper').animate({
		// 	top:'0' , opacity:0
		// },500);
		$('.wrapper').hide();
	              $('.container').show();
	              $('.log-body input').next().text(" ");
	              $('.reg-body input').next().text(" ");
	})


