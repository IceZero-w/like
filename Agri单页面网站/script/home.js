$(function(){
  var arr = ['#home','#aboutme','#services','#works','#team','#contact'];
  $('#home nav a').each(function(index,item){
    $(item).click(function(){
      var id = arr[index];
      $('html,body').animate({
        scrollTop:$(id).offset().top
      },1000);
    })
  })
//阻止回到顶部按钮执行多次
  var flag = true;
  $('#goback').click(function(){
    if(flag){
      flag = false;
      $('html,body').animate({
        scrollTop:0
      },1000,function(){
        flag = true;
      });
    }
  })

  $(window).scroll(function(e){
    if($('#goback').offset().top>1000){
      $('#goback').show();
    }else{
      $('#goback').hide();
    }
  })
})