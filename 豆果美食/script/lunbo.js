
 $(function(){
	var index=1;
	var timer;
	var interval=5000;
	function move(offset){
	newLeft=parseInt($('.picture').css('margin-left'))+offset;
	if(newLeft>-580){newLeft=-3380;}
	if(newLeft<-3620){newLeft=-580;}
	// $('.picture').css('margin-left',newLeft);
	$('.picture').animate({marginLeft:newLeft},1000);
    }
    $('.left').on('click',function(){
	move(700);
	index--;
	if(index<1){index=5;}
	showbuttons(index);
    })
    $('.right').on('click',function(){
	move(-700);
	index++;
	if(index>5){index=1;}
	showbuttons(index);
    })
    function showbuttons(number){
    	$('.lunbo ul li').eq(number-1).addClass('active').siblings().removeClass('active');
    }
    $('.lunbo ul li').on('click',function(){
    	myindex=parseInt($(this).attr('index'));
    	var offset=-700*(myindex-index);
    	move(offset);
    	index=myindex;
    	showbuttons(index);
    })
    function play(){
    	timer=setTimeout(function(){
    	  $('.lunbo .right').trigger('click');
    	  play();
    	},interval);
    }
    function stop(){
    	clearTimeout(timer);
    }
    $('.lunbo showbox').hover(stop,play);
    play();
})