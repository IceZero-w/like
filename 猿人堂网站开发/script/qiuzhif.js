
$(function(){
		// 内容1
		var table=$('#user-text2 table');
		var txt1="";
		for(i=1;i<=2;i++){
			var data1="阿里巴巴";
			var data2="前端工程师";
			var data3="2017-7-20";
			var usertext2='<tr>'+
                                                '<td>'+data1+'</td>'+
                                                '<td>'+data2+'</td>'+
                                                '<td>'+data3+'</td>'+
                                            '</tr>';
                                            txt1+=usertext2;
		}
		table.append(txt1);
		// 内容2
		var table=$('#user-text3 table');
		var txt2="";
		for(i=1;i<=1;i++){
			var data1="";
			var data2="";
			var data3="";
			var usertext2='<tr>'+
                                                '<td>'+data1+'</td>'+
                                                '<td>'+data2+'</td>'+
                                                '<td>'+data3+'</td>'+
                                           ' </tr>';
                                            txt2+=usertext2;
		}
		table.append(txt2);

		// 内容0
		var username=$('p.user-name');//用户名
		var txt0username="沈洁";
		username.text(txt0username);

		var jobtitle=$('p.user-item span');//求职岗位
		var txt0jobtitle="产品经理";
		jobtitle.text(txt0jobtitle);

		var aboutme=$('#user-text1 .ql-editor');//关于我
		var txt0aboutme="请点击发帖按钮来编辑内容";
		aboutme.text(txt0aboutme);

		var workexprience=$('#user-text2 .ql-editor');//工作经验
		var project=$('#user-text3 .ql-editor');//项目经验
		var fabu=$('#fabu');
		fabu.click(function(){
			var selectval=$('.select1 option:selected').val();
			var content=$('#standalone-container .ql-editor');
			var title1=$('textarea.textarea1')
			aboutme.text('');
			if(selectval==3){;
				jobtitle.text(title1.val());
				aboutme.append(content.html());	
			}else{
				alert('请选择求职!');
			}

			var txt0jobtitle=title1.val();//得到求职岗位，导入数据库的值
			txt0aboutme=content.text();//得到编辑的文本，导入数据库的值
			title.val('');
			content.text('');
		})
		var aboutme=$('#user-text1 .ql-editor');//获取编辑后的关于我标签
		txt0=aboutme.text();//得到编辑的文本，导入数据库的值

		var jobtitle=$('p.user-item span');//获取编辑后的求职岗位
		var txt0jobtitle=jobtitle.text();//得到求职岗位，导入数据库的值

		// 项目经验
			var bgd=$('#user-text3');
			var tbtext=$('#user-text3 table tr td');
			if(tbtext.text()){
				bgd.css("background","url('../images/no-content.png') no-repeat");
			}else{
				bgd.css("background","");
			}
	
})
