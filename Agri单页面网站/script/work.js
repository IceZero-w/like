$(function(){
  $('.testimonial_botom li.li1').click(function(){
    $('.testimonial_center_box1').fadeIn('slow');
    $('.testimonial_center_box2').fadeOut('slow');
    $('.testimonial_botom li.li2').removeClass('active');
    $('.testimonial_botom li.li1').addClass('active');
  })
  $('.testimonial_botom li.li2').click(function(){
    $('.testimonial_center_box1').fadeOut('slow');
    $('.testimonial_center_box2').fadeIn('slow');
    $('.testimonial_botom li.li1').removeClass('active');
    $('.testimonial_botom li.li2').addClass('active');
  })
  function next(){
    $('.testimonial_botom li.li1').click();
    setTimeout(pre,2000);
  }
  function pre(){
    $('.testimonial_botom li.li2').click();
  }
  setInterval(next,4000);
})