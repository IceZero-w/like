$(function(){
		// 内容
		var ul=$('.rementuijian ul');
		var txt="";
      		var array1=["Linux环境下的MySQL安装","原来GitHub网红是怎么混出来的","Python装饰器进阶之一","Python多线程----线程池","精通Python爬虫-01-不断前行的蜘蛛","Angular2集成开发环境","哒哒租车系统，自己学了一段时间写的","C贪吃蛇——每天完善一点小功能","如何学好，用好MySQL数据库？"];
		var array2=["社交","招聘","项目","社交","招聘","项目","项目","社交","招聘"];
		for(var i=1;i<=9;i++){
		var data=["alltiezi.html","allzhaopin.html","allzhaopin.html"];
		var data0;
		var data1=i;
		var data2=array1[i-1];
		var data3=array2[i-1];
			if(data3=="社交"){
				data0=data[0];
			}else if(data3=="招聘"){
				data0=data[1];
			}else{
				data0=data[2];
			}
		var rementuijiantxt='<li><a href='+data0+'>'+data1+'<i></i>'+data2+'<span>'+data3+'</span></a></li>';
		txt +=rementuijiantxt;
		}
		ul.append(txt);
		// 图标变色
		var tubiao=$('.rementuijian ul li a span');
		// console.log(tubiao);
		tubiao.map(function(index,item){
			var text=item.innerHTML;
			// console.log(text);
			if(text=="社交"){
				$(item).css("background","url('./images/shejiao.png')");
			}else if(text=="招聘"){
				$(item).css("background","url('./images/zhaopin.png')");
			}else{
				$(item).css("background","url('./images/xiangmu.png')");
			}
		})		
})			

