$(function(){
  $('.input').each(function(index,item){
    var span = $(item).parent().find('span');
    $(item).focus(function(){
      span.css("top","-10px");
      $(item).css("border-bottom","2px solid #333333");
    }).blur(function(){
      $(item).css("border-bottom","1px solid #DCDCDC");
      span.css("top","10px");
    })
  })
  $('.textarea  ').each(function(index,item){
    var span = $(item).parent().find('span');
    $(item).focus(function(){
      span.css("top","-10px");
      $(item).css("border-bottom","2px solid #333333");
    }).blur(function(){
      $(item).css("border-bottom","1px solid #DCDCDC");
      span.css("top","10px");
    })
  })
})