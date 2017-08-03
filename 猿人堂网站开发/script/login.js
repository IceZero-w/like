$(function(){
          //声明所有的电子邮件变量
          var mail=new Array("sina.com.cn",
            "126.com","163.com","gmail.com",
            "qq.com","sohu.com");
          //生成一个个li，并加入到ul中
          for(var i=0;i<mail.length;i++){
              var liElement=$("<li class=\"autoli\"><span class=\"ex\"></span><span class=\"at\">@</span><span class=\"tail\">"+mail[i]+"</span></li>");
              liElement.appendTo(".list-email");
           }
           //首先让list隐藏起来
           $(".list-email").hide();
           $(".email").keyup(function(event){
           //键入的内容不是上下箭头和回车
           if(event.keyCode!=38&&event.keyCode!=40&&event.keyCode!=13){
           //如果输入的值不是空或者不以空格开头
           if($.trim($(this).val())!=""&& $.trim($(this).val()).match(/^@/)==null){
            $(".list-email").show();
          //如果当前有已经高亮的下拉选项卡，那么将其移除
          if($(".list-email li:visible").hasClass("lilight")){
          $(".list-email li").removeClass("lilight");
          }
          //如果还存在下拉选项卡，那么将其高亮
          if($(".list-email li:visible")){
          $(".list-email li:visible:eq(0)").addClass("lilight");
          }
          }else{
          //否则不进行显示
          $(".list-email").hide();
          $(".list-email li").removeClass("lilight");
          }
          //输入的内容还没有包括@符号
                     if($.trim($(this).val()).match(/.*@/)==null){
          // $(".list-email li .ex ").text($(this).val());
           $(".list-email").hide();
          }else{
          //输入的符号已经包含了@
          var str = $(this).val();
          var strs = str.split("@");
          $(".list-email li .ex ").text(strs[0]);
          if($(this).val().length>=strs[0].length+1){
          tail=str.substr(strs[0].length+1);
          $(".list-email li .tail").each(function(){
          //如果数组中的元素是以文本中的后缀开头，那么就显示，否则不显示
          if(!($(this).text().match(tail)!=null&&$(this).text().indexOf(tail)==0)){
          //隐藏其他的li
          $(this).parent().hide();
          }else{
          //显示所在的li
          $(this).parent().show();
          }
          })
          }
          }
          }
        //按了回车时，将当前选中的元素写入到文本框中
        if(event.keyCode==13){
        $(".email").val($(".list-email li.lilight:visible").text());
        $(".list-email").hide();
        }
        })
        //监听上下方向键
        $(".email").keydown(function(event){
        //下方向键按下了
        if(event.keyCode==40){
        if($(".list-email li").is(".lilight")){
        if($(".list-email li.lilight").nextAll().is("li:visible")){
        $(".list-email li.lilight").removeClass("lilight").next("li").addClass("lilight");
        }
        }
        }
        })
        //当鼠标点击某个下拉项时，选中该项，下拉列表隐藏
      $(".list-email li").click(function(){
      $(".email").val($(this).text());
      $(".list-email").hide();
      })
      //当鼠标划过某个下拉项时，选中该项，下拉列表隐藏
      $(".list-email li").hover(function(){
      $(".list-email li").removeClass("lilight");
      $(this).addClass("lilight");
      })
      //当鼠标点击其他位置，下拉列表隐藏
      $(document).click(function(){
      $(".list-email").hide();
      })
   
       // 登录
      var ok1=false;
      var ok2=false;
      var ok3=false;
      //验证邮箱
      $('input[name="email"]').focus(function(){
        $(this).next().text(" ");
          }).blur(function(){
              if($(this).val().search
                (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
                  $(this).next().text('请输入正确的邮箱！').addClass('state');
              }else{                  
                  $(this).next().text(" ");
                  ok1=true;
              }  
          });
      // 验证密码
      $('input[name="password"]').focus(function(){
          $(this).next().text(" ");
      }).blur(function(){
          if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
              $(this).next().text(" ");
              ok2=true;
          }else{
              $(this).next().text('6-16位密码，区分大小写，不能用空格').addClass('state');
          } 
      });
      //提交登录按钮，所有验证通过方可提交
      $('.enter').click(function(){
          if(ok1 && ok2 ){
              $('form').submit();
              alert("Success!");
          }else{
              return false;
          }
      });
      //验证码输入
     $('input[name="code"]').focus(function(){
      $(this).next().next().text(" ");
     }).blur(function(){
      if ($(this).val().length <=0) {
        $(this).next().next().text("请输入验证码！").addClass('state');
      }else if (inputCode != yzcode){
                  $(this).next().next().text("验证码输入错误！").addClass('state');
                  createCode();//刷新验证码   
            }else{
        $(this).next().next().text(" ");
        ok3=true;
      }
     });
     //提交注册按钮，所有验证通过方可提交
     $('.signup').click(function(){
      if(ok1&&ok3){
        $('form').submit();
        alert("Success!");
      }else{
        return false;
      }
     })
  var listemail=$('li.autoli');
               listemail.map(function(index,item){
                $(this).click(function(){
                  $('.state').text(" ");
                  ok1=true;
                })
               })
})
