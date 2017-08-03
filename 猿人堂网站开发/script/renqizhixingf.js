$(function(){

		// 内容
		var txt="";
		var ul=$('ul.list1');
		for(var i=1;i<=5;i++){
			var data1="人菜别怪社会";
			var data2="JAVA开发工程师";
			var star=["100","500","1100","1800","5000"];
			var data3=star[i-1];
			var renqizhixingtxt='<li class="list1-1 clearfix">'
	                                +'<a href="javascript:;" class="clearfix">'
	                                   + '<img src="./images/用户头像.png" width="52px" height="52px"/>'
	                                    +'<p class="p1">'+data1+'<span>'+data2+'</span></p>'
	                                    +'<p class="p2" ><span>积分<i >'+data3+'</i></span></p>'
	                                    +'<ul class="list2 clearfix">'
	                                        +'<li class="list2-1">★</li>'
	                                        +'<li>★</li>'
	                                        +'<li>★</li>'
	                                        +'<li>★</li>'
	                                        +'<li>★</li>'
	                                    +'</ul>'
	                                +'</a>'
	                            +'</li>';
	                            txt+=renqizhixingtxt;
		}
		ul.append(txt);
		// 星星变色
		var lis1= $('ul.list1>li');
		var integrals=$('ul.list1 li p i');
		var number=0;
		integrals.map(function(index,item){
			var integ=item.innerHTML;
			if(integ>=0&&integ<100){
				number=1;
				redStar(number,index);
			}else if(integ>=100&&integ<500){
				number=2;
				redStar(number,index);
			}else if(integ>=500&&integ<1000){
				number=3;
				redStar(number,index);
			}else if(integ>=1000&&integ<2000){
				number=4;
				redStar(number,index);
			}else{
				number=5;
				redStar(number,index);
			}
		})
		function redStar(number,index){

			var lis2=lis1.eq(index).find('li');
			for(i=0;i<number;i++){
				lis2.eq(i).css('color','#8F0B09');
			}
		}
		lis1.map(function(index,item){
			$(this).mouseover(function(){
				$(this).css('background','#F7F9FC');
			})
			$(this).mouseout(function(){
				$(this).css('background','#FFFFFF');
			})
		})
	
})

