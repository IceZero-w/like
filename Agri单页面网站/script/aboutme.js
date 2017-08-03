$(function(){
  var index = 1;
  $('.aboutme_right .button a.a1').click(function(){
    if(index<=1){
      index = 3;
    }else{
      index--;
    }
    if(index ==1){
      $('.right_content1').fadeIn('slow');
      $('.right_content2').fadeOut('slow');
      $('.right_content3').fadeOut('slow');
    }else if(index == 2){
      $('.right_content1').fadeOut('slow');
      $('.right_content2').fadeIn('slow');
      $('.right_content3').fadeOut('slow');
    }else if(index == 3){
      $('.right_content1').fadeOut('slow');
      $('.right_content2').fadeOut('slow');
      $('.right_content3').fadeIn('slow');
    }
  })

 $('.aboutme_right .button a.a2').click(function(){
    if(index>=3){
      index = 1;
    }else{
      index++;
    }
    if(index ==1){
      $('.right_content1').fadeIn('slow');
      $('.right_content2').fadeOut('slow');
      $('.right_content3').fadeOut('slow');
    }else if(index == 2){
      $('.right_content1').fadeOut('slow');
      $('.right_content2').fadeIn('slow');
      $('.right_content3').fadeOut('slow');
    }else if(index == 3){
      $('.right_content1').fadeOut('slow');
      $('.right_content2').fadeOut('slow');
      $('.right_content3').fadeIn('slow');
    }
  })
  function next(){
    $('.aboutme_right .button a.a2').click();
  }
  setInterval(next,2000);
})