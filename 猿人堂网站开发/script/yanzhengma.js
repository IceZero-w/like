        var a=parseInt(Math.random()*100);
        var b=parseInt(Math.random()*100);
        var c=$('.yanzhengma input');
        var title=$('textarea.textarea1');
        function rand(){
            a=parseInt(Math.random()*100);
            b=parseInt(Math.random()*100);
            $('#math').text(a+"+"+b+"=?");
        }
        rand();
        $(function(){
                 function judge(){
                var cc=c.val();
                
                if(cc != a+b){
                    alert('验证码错误');
                    $('.yanzhengma input').focus();
                }
                var tt=title.val();
                if(tt.length>40||tt.length==0){
                    alert('标题不能空且不能超过40个字');
                }
            }
            $('#math').click(function(){
                rand();
            })
            $('button#fabu').click(function(){
                judge();
                rand();
            })
        })
        
        // 选卡提示
        var title1=$('textarea.textarea1');
var select11=$('.select1')
var selectval=$('.select1 option:selected').val();
select11.click(function(){
    var title1=$('textarea.textarea1');
    var selectval=$('.select1 option:selected').val();
    if(selectval==3){
            title1.attr('placeholder','请输入求职岗位');
        }else if(selectval==1){
            title1.attr('placeholder','请输入帖子标题');
        }else if(selectval==2){
            title1.attr('placeholder','请输入招聘岗位');
        }else{
            title1.attr('placeholder','请输入项目名称');
        }
})
        if(selectval==3){
            title1.attr('placeholder','请输入求职岗位');
        }else if(selectval==1){
            title1.attr('placeholder','请输入帖子标题');
        }else if(selectval==2){
            title1.attr('placeholder','请输入招聘岗位');
        }else{
            title1.attr('placeholder','请输入项目名称');
        }
       

