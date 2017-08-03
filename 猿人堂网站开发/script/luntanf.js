$(function(){
	// 内容1
	var table1=$('.table1');
	var shejiaoa="alltiezi.html";
	var zhaopina="allzhaopin.html";
	var qiuzhia="allqiuzhi.html";
	var xiangmua="allzhaopin.html";
	var txt0="";
	function shuju(data0){
		for(var i=1;i<=3;i++){
			var zhidingtxt='<tr class="clearfix">'+
		                        '<td>'+
		                            '<div class="recommend clearfix">'+
		                                '<div class="user clearfix fl">'+
		                                    '<a href="qiuzhi.html" class="user-img">用户头像</a>'+
		                                    '<a href="qiuzhi.html" class="user-name">小楼听风雨</a>'+
		                                '</div>'+
		                                '<div class="desc">'+
		                                    '<p class="title">'+
		                                        '<a href="javascript:;">'+i+'</a>'+
		                                    '</p>'+
		                                    '<p class="detail">'+
		                                        '<a href='+data0+'>'+
		                                            '在编写多线程程序时，必须注意资源的使用问题。如果两个线程（多个线程时情况类似）分别拥有不同的资源，而同时又需要对方释放资源才能继续运行时，就会发生死锁。本实例演示了一种解决死锁的方式。'+
		                                        '</a>'+
		                                    '</p>'+
		                                    '<span href="javascript:;" class="icon time"> <i>2月27日 16:14</i>'+
		                                    '</span>'+
		                                    '<span href="javascript:;" class="icon see"> <i>465</i>'+
		                                        '浏览'+
		                                    '</span>'+
		                                    '<span href="javascript:;" class="icon comments">'+
		                                        '<i>0评论</i>'+
		                                    '</span>'+
		                                '</div>'+
		                            '</div>'+
		                        '</td>'+
		                        '</tr>';	
		                        txt0+=zhidingtxt;	
		}
		console.log(table1)
		table1.empty();
		table1.append(txt0);
	}
	shuju(shejiaoa);
	var menua=$('.menu-nav ul li a');
	menua.map(function(index,item){
		console.log(index)
		$(this).click(function(){

			if(index==0){
				txt0="";
				shuju(shejiaoa);

			}
			else if(index==1){
				txt0="";
				shuju(zhaopina);
				
			}else if(index==2){
				txt0="";
				shuju(qiuzhia);
		
			}else{
				txt0="";
				shuju(zhaopina);
				
			}
				// 浏览次数
	var descs=$('.desc');
	descs.map(function(index,item){
		$(this).click(function(){
			seenum(index);
		})
	})
	function seenum(index){
		var liulan=descs.eq(index).find('.see i');
		console.log(liulan);
		var liulannum=parseInt(liulan.text());
		liulan.text(liulannum+1);
	}

	// 用户名背景色

	var usera=$('.user a.user-name');
	var math=parseInt(Math.random()*3);
	usera.map(function(index,item){
		math=parseInt(Math.random()*3);
		randcolor(index);
	})
	function randcolor(index){
		var usercolor=usera.eq(index);
		if(math==0){
			usercolor.css('background-color','#1D938A');
		}else if(math==1){
			usercolor.css('background-color','#F37740');
		}else{
			usercolor.css('background-color','#393756');
		}
	}
		})
	})
	// 浏览次数
	var descs=$('.desc');
	descs.map(function(index,item){
		$(this).click(function(){
			seenum(index);
		})
	})
	function seenum(index){
		var liulan=descs.eq(index).find('.see i');
		console.log(liulan);
		var liulannum=parseInt(liulan.text());
		liulan.text(liulannum+1);
	}

	// 用户名背景色

	var usera=$('.user a.user-name');
	var math=parseInt(Math.random()*3);
	usera.map(function(index,item){
		math=parseInt(Math.random()*3);
		randcolor(index);
	})
	function randcolor(index){
		var usercolor=usera.eq(index);
		if(math==0){
			usercolor.css('background-color','#1D938A');
		}else if(math==1){
			usercolor.css('background-color','#F37740');
		}else{
			usercolor.css('background-color','#393756');
		}
	}
	// 分页js
	// 内容2
             var table2=$(".table2");
             var tr0="";
	for(var i=1;i<=288;i++) { 
	var data1="刷分零容忍！关于刷分用户的处罚公告"+i;
	var data2="技术支持小娄";
	var data3="3月01日 16:14";
	        var tr='<tr>'+
                                        '<td>'+
                                            '<div class="post">'+
                                                '<p>'+
                                                    '<a href="javascript:;" class="a1">'+data1+'</a>'+
                                                    '<a class="a2" href="javascript:;"><i></i>'+data2+'</a>'+
                                                    '<a class="a3" href="javascript:;"><i></i>'+data3+'</a>'+
                                                '</p>'+
                                            '</div>'+
                                        '</td>'+
                                    '</tr>';
	  tr0 += tr;
	}
	table2.append(tr0);
	    // 分页背景色设置
	    var tab=$('.table2');
	    var first=$('a.first');
	    var trs=$('.table2 tr');
	    trs.map(function(index,item){
	        if((index+1)%2==1){
	            $(this).find('p').css('background','#fff');
	        }else{
	            $(this).find('p').css('background','#E3E3E3');
	        }
	    })
	    trs.css('background-color','#fff');
	    // 确定页数anum
	    if(trs.length%10==0){
	        var anum=parseInt(((trs.length)/10));
	    }else{
	        var anum=parseInt(((trs.length)/10))+1;
	    }
	    // 根据内容trs的多少来决定分页的按钮(会自动添加)
	    for(i=2;i<=anum;i++){
	        var anums=$('.pages a');
	        var txt=$('<a></a>').text(i);
	        anums.eq(i-2).after(txt);
	    }
	    // var anumss=$('.pages a');
	    // for(var i=1;i<=anumss.length;i++){
	    //     anumss.eq(i-1).attr('name',i);
	    // }


	    function move(offset){
	        var newTop=parseInt($(".table2").css("margin-top"))+offset;
	        if(newTop>0){
	            newTop=0;index=2;
	        }
	        if(newTop<=-400*(anum-1)){
	            newTop=-400*(anum-1);index=anum-1;
	        }
	        tab.css('marginTop',newTop);
	    }
	    var pagesa=$('.pages a');
	    function showcolor(number){
	        pagesa.eq(number-1).addClass('current').siblings().removeClass('current');
	    }
	    pagesa.click(function(){
	        var newindex=parseInt($(this).text());
	        index=newindex-index;
	        move(-index*400);
	        index=newindex;
	        showcolor(index);
	            	    var currentpage=parseInt($('.current').text());
	    var anums=$('.pages a');
	            	    if(currentpage==1){
	    	$('a.pre').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.shouye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else if(currentpage==anums.length){
	    	$('a.next').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.weiye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else{
	    	$('a.pre').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.next').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.shouye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.weiye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    }
	    })
	        // 页与上一页，下一页的点击事件
	    var pre=$('a.pre');
	    var next=$('a.next');
	    var index=1;
	    var newTop=0;
	    pre.click(function(){
	            move(400);
	            index--;
	            showcolor(index);
	            var ii=parseInt(index/5);
	            for(var aa=1;aa<=ii;aa++){
	                    if(index<=aa*5&&index<=pagesa.length-5){
	                    for (var i = aa*5; i >aa*5-10; i--) {
	                        pagesa.eq(i-1).css('display','inline-block');
	                    }
	                }
	            }
	            	    var currentpage=parseInt($('.current').text());
	    var anums=$('.pages a');
	            	    if(currentpage==1){
	    	$('a.pre').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.shouye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else if(currentpage==anums.length){
	    	$('a.next').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.weiye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else{
	    	$('a.pre').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.next').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.shouye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.weiye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    }
	    })
	    next.click(function(){
	            move(-400);
	            index++;
	            showcolor(index);
	            var ii=parseInt(index/5);
	            for(var aa=1;aa<=ii;aa++){
	                    if(index>aa*5&&index<=pagesa.length-5){
	                    for (var i = aa*5; i >aa*5-5; i--) {
	                        pagesa.eq(i-1).css('display','none');
	                    }
	                }
	            }
	            	    var currentpage=parseInt($('.current').text());
	    var anums=$('.pages a');
	            	    if(currentpage==1){
	    	$('a.pre').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.shouye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else if(currentpage==anums.length){
	    	$('a.next').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.weiye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else{
	    	$('a.pre').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.next').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.shouye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.weiye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    }
	    })
	        // 首页尾页按钮的设置，改变table的margin-top值来显示当前文本，也就是跳到所指定的页
	    $('a.shouye').click(function(){
	        tab.css('marginTop',0);
	        index=1;
	        showcolor(index);
	        for (var i = 10; i >0; i--) {
	            pagesa.eq(i-1).css('display','inline-block');
	        }
	        	            	    var currentpage=parseInt($('.current').text());
	    	$('a.pre').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.shouye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});

	    	$('a.next').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.weiye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    })
	    $('a.weiye').click(function(){
	        var anumss=$('.pages a');
	        var newtop=-400*(anumss.length-1);
	        tab.css('marginTop',newtop);
	        index=anumss.length;
	        showcolor(index);
	        var ii=parseInt(index/10);
	        for(var aa=1;aa<=ii;aa++){
	            if(index>aa*10){
	                for (var i = aa*10; i >aa*10-10; i--) {
	                    pagesa.eq(i-1).css('display','none');
	                }
	            }
	        }
	    var anums=$('.pages a');
	    	$('a.next').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.weiye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.pre').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.shouye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})	        
	    })
	    var currentpage=parseInt($('.current').text());
	    var anums=$('.pages a');
	    if(currentpage==1){
	    	$('a.pre').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.shouye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else if(currentpage==anums.length){
	    	$('a.next').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    	$('a.weiye').css({
	    		'color':'#fff',
	    		'border-color':'#fff'
	    	});
	    }else{
	    	$('a.pre').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.next').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.shouye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    	$('a.weiye').css({
	    		'color':'#9F0B0B',
	    		'border-color':'#9F0B0B'	    		
	    	})
	    }

	    	// 火热
	var posts=$('.post');
	var posta1=$('.post a1');
	var posta2=$('.post a2');
	var posta3=$('.post a3');
	posts.map(function(index,item){
	if(index<=9){
	$(this).mouseover(function(){
				$(this).addClass('hot');
			})
			$(this).mouseout(function(){
				$(this).removeClass('hot');
			})
	}
	$(this).mouseover(function(){
		$(this).find('a').css('color','#9F0B0B');
			})
	$(this).mouseout(function(){
		$(this).find('a.a1').css('color','#333333');
		$(this).find('a.a2').css('color','#666666');
		$(this).find('a.a3').css('color','#666666');
			})	
	})
})
