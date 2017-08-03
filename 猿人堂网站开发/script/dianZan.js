$(function(){
	var number=$('.likes a span').text();
	var e0;
	$('.likes a').click(function(){
		if(e0){
			number=parseInt(number) - 1;
			$('.likes a span').text(number);
			$('.likes a').css('background-color','#A39E98');
			e0=false;
		}else{
			number=parseInt(number) + 1;
			$('.likes a span').text(number);
			$('.likes a').css('background-color','#9F0B0B');
			e0=true;
		}	
	})
	// tiezi.html收藏js
	var collect=$('.share a:nth-of-type(3)');
	console.log(collect)
	var collecti=$('.share  a i.collect');
	var collectspan=$('.share a:nth-of-type(3) span');
		var e1;
	collect.click(function(){

		if(e1){
			collecti.css('background','url("./images/collect1.png")');
			collectspan.css('color','#666666');
			collectspan.text('喜欢收藏');
			e1=false;
		}else{
			collecti.css('background','url("./images/collect2.png")');
			collectspan.css('color','#9F0B0B');
			collectspan.text('取消收藏');
			e1=true;
		}	
	})
	// tiezi.html点赞js
	var agree=$('.rep-agr-bx a:nth-of-type(2)');
        	agree.map(function(index,item){
        	var e;
            $(this).on('click',function(){
                if(e){
                    subnum(index);
                    e=false;
                }else{
                    addnum(index);
                    e=true;
                }
            })
        })
        function addnum(index){
            var agreespan=agree.eq(index).siblings('span').find('span.ag');
            var agreenum=parseInt(agreespan.text());
            agreespan.text(agreenum+1);
            agree.eq(index).text('已赞同');
            agree.eq(index).css('color','#9F0B0B');
        }
        function subnum(index){
            var agreespan=agree.eq(index).siblings('span').find('span.ag');
            var agreenum=parseInt(agreespan.text());
            agreespan.text(agreenum-1);
            agree.eq(index).text('赞同');
            agree.eq(index).css('color','#40A1DB');
        }
})
	
	
