$(function(){
	// console.log(1111)
	$('.nav-search-text').on('focus',function(){
		// console.log(2222);
		$('.search-tag').css('display','none');
	})
	$('.nav-search-text').on('blur',function(){
		// console.log(33333);
		$('.search-tag').css('display','block');
	})
	// $('.nav-search-btn').on('click',function(){
	// 	console.log(4444)
	// 	$('.search-tag').css('display','none');
	// })
})