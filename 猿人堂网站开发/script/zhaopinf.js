$(function(){
	            // 内容0
		var zhaopintitle=$('.recruit-content h3 p');//招聘岗位
		var txt0zhaopintitle="高级工程师";//招聘岗位变量
		zhaopintitle.text(txt0zhaopintitle);

		var zhaopinstate=$('.recruit-content h3 span i');//招聘状态
		var txt0zhaopinstate="进行中";//招聘状态变量
		zhaopinstate.text(txt0zhaopinstate);

		var zhaopincompany=$('.recruit-company');
		var txt0zhaopincompany="南昌三众软件有限公司";
		var txt0zhaopintime="3月01日 17:03";
		var txt0zhaopincompanytime='<p><i class="recruit-icon user"></i>'+txt0zhaopincompany+'<i class="recruit-icon time"></i>'+txt0zhaopintime+'</p>';
		zhaopincompany.append(txt0zhaopincompanytime);//招聘公司与时间

		var zhaopinxinxi=$('#recruit-text .ql-editor');//招聘内容提示
		var txt0zhaopinxinxi="请点击发帖按钮来编辑内容";
		zhaopinxinxi.text(txt0zhaopinxinxi);

		var fabu=$('#fabu');
		fabu.click(function(){
			var selectval=$('.select1 option:selected').val();
			var content=$('#standalone-container .ql-editor');
			var title1=$('textarea.textarea1');
			zhaopinxinxi.text('');
			if(selectval==2||selectval==4){
				zhaopintitle.text(title1.val());
				zhaopinxinxi.append(content.html());
			}else{
				alert('请选择招聘或者项目信息!');
			}

			txt0zhaopintitle=title1.val();//得到编辑后的招聘岗位变量，用于返回数据库
			txt0zhaopinxinxi=content.text();//得到编辑后的招聘内容，用于返回数据库	
			title1.val('');
			content.text('');
		})
		//收藏
		var collecta=$('p.recruit-like a');
		var collecti=$('p.recruit-like i');
		var shenqing=$('.recruit-button');
		var e1;
		collecta.click(function(){

			if(e1){
				collecti.css('background','url("./images/collect1.png") no-repeat');
				collecta.css('color','#666666');
				collecta.text('喜欢收藏');
				e1=false;
			}else{
				collecti.css('background','url("./images/collect2.png") no-repeat');
				collecta.css('color','#9F0B0B');
				collecta.text('取消收藏');
				e1=true;
			}	
		})
		shenqing.click(function(){
			shenqing.val('申请成功');
			shenqing.css({
					"text-shadow": "none",
					"background-color": "#999999"
			})
		})
		// 遮罩层内容
		var recruitbox=$('.recruit-box-content');
		var txt="";
		for(var i=1;i<=25;i++){
		var data0="allqiuzhi.html";
		var data1="元素山庄"+i;
		var data2="2017/3/15 13:49:03 申请";
		var zhaopintxt='<a href='+data0+' class="clearfix" target="_blank">'+
                                '<i class="user-img"></i>'+
                                '<span class="user-name">'+data1+'</span>'+
                                '<span class="user-time">'+data2+'</span>'+
                            '</a>';
                            txt+=zhaopintxt;			
		}
		recruitbox.append(txt);
		// 申请遮罩层
		var wrapper2='<divclass="wrapper2"></div>';
		$('.user-list-img').on('click',function(){
			$('.wrapper2').css('display','block')
			$('.recruit-box').css('display','block');
		})
		$('#close').on('click',function(){
			$('.wrapper2').css('display','none')
			$('.recruit-box').css('display','none');
		})
		$('.wrapper2').on('click',function(){
			$('.wrapper2').css('display','none')
			$('.recruit-box').css('display','none');
		})

			var list=$('.recruit-box-content>a');
			list.map(function(index,item){
				$(this).click(function(){
					var usertime=$(this).find('span.user-time');
					usertime.css('color','red');
				})
			})

	
})
