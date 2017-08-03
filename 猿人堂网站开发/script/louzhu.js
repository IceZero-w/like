$(function(){
	var name=$('.title span:first-of-type');
	var ids=$('span.nickname');
		
	ids.map(function(index,item){
		if($(this).text()==name.text()){
			$(this).find('i').addClass('louzhu');
		}
	})
	var searchlou=$('.reply-head input.storey');
	var goloua=$('.reply-head a#golou');
	var trss=$('table tr')
	goloua.click(function(){
		var searchlouceng=parseInt(searchlou.val());
		console.log(searchlouceng)
		if(!isNaN(searchlouceng)){
		trss.show();
		var ll='#'+searchlouceng;
		goloua.attr('href',ll);
		}
		
	})
})