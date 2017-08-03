$(function(){
		// 内容1
		var txt="";
		var title=$('.wrap .title');
		var titlecontent="JAVA中关于线程的一些问题？";
		var titleauthor="风雨兼程";
		var titletime="3月1日 17:02";
		var txttitle='<h2>'+titlecontent+'</h2>'+
                            '<p> <i class="icon name"></i>'+
                                '<span>'+titleauthor+'</span>'+
                                '<i class="icon time"></i>'+
                                '<span>'+titletime+'</span>'+
                            '</p>';
                          title.append(txttitle);

                          //内容2
                          var content=$('.wrap .center');
                          var data2="images/代码.gif";
                          var data1="我这里定义了两个线程thred_java与thred_java1,并通过语句thred_java1(join)将thred_java1的优先级提高。为什么在运行程序的时候,thred_java1的优先级没有提高？？？";
 		var data3="2";                       
                          var tiezicontent='<p>'+data1+'</p>'+
                            '<div class="pic">'+
                                '<img src='+data2+' alt=""/></div>'+
                            '<div class="common">'+
                                '<div class="likes">'+
                                    '<a href="javascript:;" >'+
                                        '<span>'+data3+'</span>'+
                                    '</a>'+
                                '</div>'+
                                '<div class="share">'+
                                        '<a href="javascript:;">'+
                                            '<i class="icon wechat"></i>'+
                                        '</a>'+
                                        '<a href="javascript:;">'+
                                            '<i class="icon qq"></i>'+
                                        '</a>'+
                                        '<i class="icon deco"></i>'+
                                        '<a href="javascript:;">'+
                                            '<i class="icon collect"></i>'+
                                            '<span>喜欢收藏</span>'+
                                        '</a>'+
                                '</div>'+
                            '</div>';
                            content.append(tiezicontent);
	            // 内容3
	            var txthuifu="";
	            var txta="";
	            	var table=$('.reply-content table');
	            for(var i=1;i<=10;i++){
	            	// 回复的3个模板
	            var txt2='<tr>'+
	                            '<td>'+
	                                '<div class="floor0 floor3 clearfix">'+
	                                    '<div class="f3-main clearfix">'+
	                                        '<div class="f3-photo fl">'+
	                                            '<a href="javascript:;" title="用户头像">'+
	                                            '<img src="images/用户头像.png" alt=""/></a>'+
	                                        '</div>'+
	                                        '<div class="f3-content fr">'+
	                                            '<p>'+
	                                                '<a href="javascript:;">'+
	                                                    '<span class="nickname">三月下扬州<i></i></span>'+
	                                                '</a>'+
	                                                '<span class="send-time">2分钟前：</span>'+
	                                                '<span class="fl-3 fl-0"><span></span>F</span>'+
	                                            '</p>'+
	                                            '<p class="dec">现在还是两个线程互抢资源'+i+'</p>'+
	                                            '<div class="rep-agr  ">'+
	                                                '<div class="rep-agr-bx">'+
	                                                    '<a id="reply3"  href="javascript:;">回复</a>'+
	                                                    '<i class="deco12"></i>'+
	                                                    '<a href="javascript:;">赞同</a>'+
	                                                    '<span>'+
	                                                        '('+
	                                                        '<span class="ag">10022</span>'+
	                                                        ')'+
	                                                    '</span>'+
	                                                '</div>'+
	                                            '</div><!--end .rep-agr-->'+
	                                            
	                                        '</div><!--end .f3-content-->'+
	                                    '</div> <!--end.f3-main -->'+
	                                    '<div class="repl0 repl3">'+
	                                        '<textarea name="verapply3" id="verapply3" cols="30" rows="10"></textarea>'+
	                                        '<div class="choose">'+
	                                            '<a class="cancle0 cancle3" href="javascript:;">取消</a>'+
	                                            '<a class="verify3" href="javascript:;">确定</a>'+
	                                            '<p class="success0 success3">'+
	                                                '<span>回复成功!</span>'+
	                                            '</p>'+
	                                            '<p class="fail0 fail3">'+
	                                                '<span>输入值不能为空！</span>'+
	                                            '</p>'+
	                                        '</div>'+
	                                    '</div><!--end .repl3-->'+
	                                '</div><!--end.floor3 -->'+
	                            '</td>'+
	                        '</tr>';
	             var txt3= '<tr>'+
                            '<td>'+
                                '<div class="floor0 floor2 clearfix">'+
                                    '<div class="f2-main clearfix">'+
                                        '<div class="f2-photo fl">'+
                                            '<a href="javascript:;"  title="用户头像">'+
                                                '<img src="images/用户头像.png" alt=""/>'+                        
                                            '</a>'+
                                        '</div>'+
                                        '<div class="f2-content fr">'+
                                            '<p>'+
                                                '<a href="javascript:;">'+
                                                    '<span class="nickname">'+
                                                        '给的再多 <i></i>'+
                                                    '</span>'+
                                                '</a>'+
                                                '<span class="send-time">5分钟前：</span>'+
                                                '<span class="fl-2 fl-0">'+
                                                    '<span></span>'+
                                                    'F'+
                                                '</span>'+
                                            '</p>'+
                                            '<p class="dec">最后那几行程序的位置没起到作用'+i+'</p>'+
                                            '<div class="message clearfix">'+
                                                '<div class="sharp"></div>'+
                                                '<p class="msg-f">'+
                                                    '<a href="javascript:;" class="msg-name">风雨兼程</a>'+
                                                    '说：'+
                                                '</p>'+
                                                '<p class="msg-h">明白了，谢谢!!!</p>'+
                                            '</div>'+
                                            '<div class="rep-agr">'+
                                                '<div class="rep-agr-bx">'+
                                                    '<a id="reply2" href="javascript:;">回复</a> <i class="deco12"></i>'+
                                                    '<a href="javascript:;">赞同</a>'+
                                                    '<span>'+
                                                        '('+
                                                        '<span class="ag">1</span>'+
                                                        ')'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<!--end .f2-content--> </div>'+
                                    '<!--end.f2-main -->'+                       
                                    '<div class="repl0 repl2">'+
                                        '<textarea name="verapply2" id="verapply2" cols="30" rows="10"></textarea>'+
                                        '<div class="choose">'+
                                            '<a class="cancle0 cancle2" href="javascript:;">取消</a>'+
                                            '<a class="verify2" href="javascript:;">确定</a>'+
                                            '<p class="success0 success2">'+
                                                '<span>回复成功!</span>'+
                                            '</p>'+
                                            '<p class="fail0 fail2">'+
                                                '<span>输入值不能为空！</span>'+
                                            '</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<!--end .repl2--> </div>'+
                                '<!--end.floor2--> </td>'+
                        '</tr>';
                        var txt4='<tr>'+
                            '<td>'+
                                '<div class="floor0 floor1 clearfix">'+
                                    '<div class="f1-main clearfix">'+
                                        '<div class="f1-photo fl">'+
                                            '<a href="javascript:;"  title="用户头像">'+
                                                '<img src="images/用户头像.png" alt=""/>'+                        
                                            '</a>'+
                                        '</div>'+
                                        '<div class="f1-content fr">'+
                                            '<p>'+
                                                '<a href="javascript:;">'+
                                                    '<span class="nickname">风雨兼程<i></i></span>'+
                                                '</a> <i class="first"></i>'+
                                                '<span class="send-time">10分钟前：</span>'+
                                                '<span class="fl-1 fl-0">'+
                                                    '<span></span>'+
                                                   ' F'+
                                                '</span>'+
                                            '</p>'+
                                            '<p class="dec">为什么这样写就可以设置优先级那？'+i+'</p>'+
                                            '<img src="images/代码.gif" alt=""/> '+                       
                                            '<div class="rep-agr">'+
                                                '<div class="rep-agr-bx">'+
                                                    '<a id="reply1" href="javascript:;">回复</a>'+
                                                    '<i class="deco12"></i>'+
                                                    '<a href="javascript:;">赞同</a>'+
                                                    '<span>'+
                                                        '('+
                                                        '<span class="ag">340</span>'+
                                                       ' )'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<!--end .f1-content--> </div>'+
                                    '<!--end.f1-main --> '+                       
                                    '<div class="repl0 repl1">'+
                                        '<textarea name="verapply1" id="verapply1" cols="30" rows="10"></textarea>'+
                                        '<div class="choose">'+
                                            '<a class="cancle0 cancle1" href="javascript:;">取消</a>'+
                                            '<a class="verify1" href="javascript:;">确定</a>'+
                                            '<p class="success0 success1">'+
                                                '<span>回复成功!</span>'+
                                            '</p>'+
                                            '<p class="fail0 fail1">'+
                                                '<span>输入值不能为空！</span>'+
                                            '</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<!--end . repl1--> </div>'+
                                '<!--end.floor1 --> </td>'+
                        '</tr>';
                        var arrtxt=[txt2,txt3,txt4];
                        var a=parseInt(Math.random()*3);
                        // 回复的内容倒叙插入
                        txta=txthuifu;
                        txthuifu=arrtxt[a];
                        txthuifu=txthuifu+txta;
	            }
	            table.prepend(txthuifu);

		// 添加回复
		$('.canc').hide();
	            $('.send').hide();
	            $('.success').hide();
	            $('.fail').hide();
	            $("textarea[name='addre']").val("");
	            // $("textarea[name='verapply3']").val("").focus();
	            // $("textarea[name='verapply2']").val("").focus();
	            // $("textarea[name='verapply1']").val("").focus();
		$('.repl0').hide();
		$('.success0').hide();
		$('.fail0').hide();
		$("textarea").val("");
		// 添加回复
	             // var addtextarea=$('.add');
	             // var body=document.body; 
	             // body.addEventListener('click',function(event){
	             //    if(event.target!=addtextarea){
	             //        $('#addre').animate({"height":"41.6px"},1000);
	             //        // $('#addre').css("resize","none");
	             //        $('.canc').fadeOut('slow');
	             //        $('.send').fadeOut('slow');
	             //        $("textarea[name='addre']").val("");
	             //    }
	             // },false)
		$('#addre').on('focus',function(){
	            $('#addre').animate({"height":"180px"},1000);
	            $('#addre').css("resize","both");
	            $('#addre').css("outline","none");
	            $('.canc').fadeIn('slow');
	            $('.send').fadeIn('slow');
	            $('.btn').css("display","block");
	            })
	            // $('.center').on('click',function(){
	            // $('#addre').animate({"height":"40px"},1000);
	            // $('#addre').css("resize","none");
	            // $('.canc').fadeOut('slow');
	            // $('.send').fadeOut('slow');
	            // $("textarea[name='addre']").val("");
	            // })
	            $('.canc').on('click',function(){
	            $('#addre').animate({"height":"40px"},1000);
	            $('#addre').css("resize","none");
	            $('.canc').fadeOut('slow');
	            $('.send').fadeOut('slow');
	            $("textarea[name='addre']").val("");
	            })
	            $('.send').on('click',function(){
	            if($("#addre").val()==""){
	                $('.fail').fadeIn('slow').delay(500).fadeOut('slow');
	                //alert("输入值不能为空！");
	            }
	            else{
	                $('.canc').fadeOut('slow');
	                $('.send').fadeOut('slow');
	                $('.success').fadeIn('slow').delay(500).fadeOut('slow');
	                $("textarea[name='addre']").val("");
	                $('#addre').css("height","40px");
	                $('#addre').css("resize","none");
	            }
	            })

	            // 加载更多并回复
		var floors=$('.floor0');
		var trs=$('tr');
		trs.map(function(index,item){
			var huifua=$(this).find('.rep-agr-bx a:first-of-type');
			var repl0=$(this).find('.repl0');
			var textarea=$(this).find('textarea');
			var cancle0=$(this).find('.repl0 a:first-of-type');
			var quedinga=$(this).find('.repl0 a:last-of-type');
			var success0=$(this).find('.repl0 p:first-of-type');
			var fail0=$(this).find('.repl0 p:last-of-type');
	                        var lou=$(this).find('span.fl-0 span');
	                        lou.text(trs.length-index);
	                        lou.attr('id',trs.length-index);
			huifua.click(function(){
				repl0.slideDown('slow');
				// textarea.focus();
			})
			cancle0.click(function(){
				repl0.slideUp('slow');
				textarea.val("");
			})
			quedinga.click(function(){
		            if(textarea.val()==""){
	                          fail0.fadeIn('slow').delay(500).fadeOut('slow');
	                        }
	                        else{
	                        repl0.fadeOut('slow');
	                        success0.fadeIn('slow').delay(500).fadeOut('slow');
	                        textarea.val("");
	                        }
			})
		})
		//楼主背景图片
		// var name=$('.title span:first-of-type');
		// console.log(name);
		// var ids=$('span.nickname');
			
		// ids.map(function(index,item){
		// 	if($(this).text()==name.text()){
		// 		$(this).find('i').addClass('louzhu');
		// 	}
		// })
		// var searchlou=$('.reply-head input.storey');
		// var goloua=$('.reply-head a#golou');
		// var trss=$('table tr')
		// goloua.click(function(){
		// 	var searchlouceng=parseInt(searchlou.val());
		// 	if(!isNaN(searchlouceng)&&searchlouceng<=trss.length){
		// 	trss.show();
		// 	var ll='#'+searchlouceng;
		// 	goloua.attr('href',ll);
		// 	}
		// })	

		// 加载更多并回复
		    var jiazai=$('.more a');
		    var trs=$('tr');
		    trs.hide();
		    trs.eq(0).show();
		    trs.eq(1).show();
		    trs.eq(2).show();
		    var index=4;
		    jiazai.click(function(){
		        //增加楼层的回复
		        newindex=index+3;
		        for(i=index;i<newindex;i++){
		            trs.eq(i-1).show();
		        }
		        index=newindex;
		        })
		        var allnum=$('span.allnum');
		        allnum.text(trs.length);
		        var height=0;  
		        var scr = 0; 
		        $(window).scroll( function() {   
		        scr = $(window).scrollTop();  
		        var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
		        if(scrollHeight-scrollTop - windowHeight<=100){
		            jiazai.click().delay(10000);
		        }
		        if(scrollHeight-scrollTop - windowHeight<50){
		    　　　　jiazai.text('已加载全部').delay(1000);
		                jiazai.css('color','#9F0B0B');
		    　　}
		        // screenheight+scr> document.body.clientHeight-120
		        } ); 		
	
})		
