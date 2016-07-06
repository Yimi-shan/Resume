    var count = 0;
    var sum;

$(document).ready(function(){
      //图片预加载
     var $img = $('img');
      var max_count = $img.length;
      $img.each(function(index, el) {
          $(this).ready(function() {
              count++;
              sum = parseInt(count/max_count*100)+"%";
              $('.start span').html(sum);
              if(count==max_count){
                $('.start').css('display', 'none');
                main();
              }
          });
      });
      

   //主函数
    function main(){
      $.F_SIZE(960);

      var mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',
      loop: false
      });

      $('.page_one>.text').show('slow');
      //控制音乐播放
      $('.audio')[0].play();
      $('.music').click(function(event) {
        $('.audio')[0].pause();
        $('.musicoff').css('display', 'block');
        $(this).css('display', 'none');
      });
      $('.musicoff').click(function(event) {
        $('.audio')[0].play();
        $('.music').css('display', 'block');
        $(this).css('display', 'none');
      });


      var box=document.getElementById('box');         
      var vn1=document.getElementById('vn1');         
      var x=document.getElementById('x');
      var earth_time;

      // 判断是否为PC端
          function IsPC(){
               var userAgentInfo = navigator.userAgent;  
               var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
               var flag = true;  
               for (var v = 0; v < Agents.length; v++) {    
                   if (userAgentInfo.indexOf(Agents[v]) > 0) { 
                      flag = false;
                      document.addEventListener('touchend', init, true);
                      break; 
                   }else{
                       document.addEventListener('mouseup', init, true);
                   }   
               }    
               return flag;  
          }
          IsPC();


      function init(){

        $('.page_one .yel').css('animation', 'down_yel 1s both,rock linear 3s  infinite');
            console.log('x')

          var result = box.getBoundingClientRect().top / window.innerHeight;


          if(result<-7){
          //********************************************************************************eight
              $('.page_eight span').css('animation', 'opc 1.5s 1s both');
              $('.page_eight img').css('display', 'block');
              $('.page_eight .e_t4').css('animation', 'e_t4 .9s both');
              $('.page_eight .e_t1').css('animation', 'e_t1 .9s both');
              $('.page_eight .e_t10').css('animation', 'e_t10 .9s both');
              $('.page_eight .e_t5').css('animation', 'e_t5 .9s both');
              $('.page_eight .e_t6').css('animation', 'e_t6 .9s both');
              $('.page_eight .e_t7').css('animation', 'e_t7 .9s both,e_m_t7 2s .9s infinite alternate');
              $('.page_eight .e_t3').css('animation', 'e_t3 .9s both,e_m_t3 4s .9s infinite alternate');
              $('.page_eight .e_t8').css('animation', 'e_t8 .9s both,e_m_t8 3s .9s infinite alternate');
              setTimeout(function(){
                  $('.page_eight .text').show('slow');
              },1000);
              setTimeout(function(){
                  $('.page_eight .me').show('slow');
              },1200);
          }else if(result<-6){
          //********************************************************************************seven
              $('.page_seven img').css('display', 'block');
              $('.page_seven .v1').css('animation', 's_v1_m 1s .2s both,s_v1 3.9s 1.2s infinite alternate');
              $('.page_seven .v2').css('animation', 's_v2_m 1s .2s both,s_v2 1.7s 1.2s infinite alternate');
              $('.page_seven .v3').css('animation', 's_v3_m 1s .2s both,s_v3 2.4s 1.2s infinite alternate');
              $('.page_seven .v4').css('animation', 's_v4_m 1s .2s both,s_v4 1.9s 1.2s infinite alternate');
              $('.page_seven .v5').css('animation', 's_v5_m 1s .2s both,s_v5 4.6s 1.2s infinite alternate');
              $('.page_seven .v6').css('animation', 's_v6_m 1s .2s both,s_v6 2.1s 1.2s infinite alternate');
              $('.page_seven .v7').css('animation', 's_v7_m 1s .2s both,s_v7 3.3s 1.2s infinite alternate');
              $('.page_seven .tap').css('animation', ' opc .8s 1s infinite alternate');
              $('.wrap').click(function(event) {
                  $('.page_seven .tap').css({
                      left: '10%',
                      display: 'none'
                  });
              });
              $('.page_seven .v1').click(function(event) {
                   $('.page_seven .vn1').show('300');
              });
              $('.page_seven .v2').click(function(event) {
                   $('.page_seven .vn2').show('300');
              });
              $('.page_seven .v3').click(function(event) {
                   $('.page_seven .vn3').show('300');
              });
              $('.page_seven .v4').click(function(event) {
                   $('.page_seven .vn4').show('300');
              });
              $('.page_seven .x').click(function(event) {
                   $('.page_seven .vn1').hide('300');
                   $('.page_seven .vn2').hide('300');
                   $('.page_seven .vn3').hide('300');
                   $('.page_seven .vn4').hide('300');
              });           
          }else if(result<-5){
          //********************************************************************************six
              $('.page_six img').css('opacity', '1');
              $('.page_six span').css('opacity', '1');
              $('.page_six em').css('opacity', '1');
              $('.page_six strong').css('opacity', '1');
              $('.page_six .e1').css('animation', 's_e1 1s infinite alternate');
              $('.page_six .e2').css('animation', 's_e2 1.4s infinite alternate');
              $('.page_six .e3').css('animation', 's_e3 1.7s infinite alternate');
              $('.page_six .e4').css('animation', 's_e4 2s infinite alternate');
              $('.page_six .e5').css('animation', 's_e5 1.2s infinite alternate');
              $('.page_six .e6').css('animation', 's_e6 3s infinite alternate');
              $('.page_six h2').css('animation', 'opc 2s both');
              $('.page_six span').css('animation', 's_span 1s .5s both');
              $('.page_six em').css('animation', 's_em 1s 1s both');
              $('.page_six strong').css('animation', 's_strong 1s 1.5s both');
              $().css({
                  property1: 'value1',
                  property2: 'value2'
              });
              setTimeout(function(){
                  $('.page_six .line').slideDown('fast');
               },500);         
          }else if(result<-4){
          //********************************************************************************nine
               $('.page_nine .t4').css('animation', 'f_t4 .9s both');
               $('.page_nine .t3').css('animation', 'f_t3 .9s both');
               $('.page_nine .t1').css('animation', 'f_t1 .9s both');
               $('.page_nine .t5').css('animation', 'f_t5 .9s both');
               $('.page_nine .t9').css('animation', 'f_t9 .9s both');
               $('.page_nine .t7').css('animation', 'f_t7 .9s both');
               $('.page_nine h2').css('animation', 'opc .5s .9s both');
               $('.page_nine span').css('animation', 'opc .5s 1.1s both');
               setTimeout(function(){
                  $('.page_nine .text').show('slow');
               },1000);
          }else if(result<-3){
          //******************************************************************************** five
               $('.page_five .d1').css('animation', 'f_d1 .9s both');
               $('.page_five .d2').css('animation', 'f_d2 .9s both');
               $('.page_five .d3').css('animation', 'f_d3 .9s both');
               $('.page_five .d4').css('animation', 'f_d4 .9s both');
               $('.page_five .d5').css('animation', 'f_d5 .9s both');
               $('.page_five h2').css('animation', 'opc .5s .9s both');
               $('.page_five span').css('animation', 'opc .5s 1.1s both');
               setTimeout(function(){
                  $('.page_five .text').show('slow');
               },1000);
          }else if(result<-2){
          //********************************************************************************fore
               $('.page_fore .t4').css('animation', 'f_t4 .9s both');
               $('.page_fore .t3').css('animation', 'f_t3 .9s both');
               $('.page_fore .t1').css('animation', 'f_t1 .9s both');
               $('.page_fore .t5').css('animation', 'f_t5 .9s both');
               $('.page_fore .t9').css('animation', 'f_t9 .9s both');
               $('.page_fore .t7').css('animation', 'f_t7 .9s both');
               $('.page_fore h2').css('animation', 'opc .5s .9s both');
               $('.page_fore span').css('animation', 'opc .5s 1.1s both');
               setTimeout(function(){
                  $('.page_fore .text').show('slow');
               },1000);
          }else if(result<-1){
          //*********************************************************************************three
              $('.page_three span').css('animation', 'sp 1s both');
              for (var i = 0; i < 9; i++) {    
                  $('.page_three .glass:eq('+i+')').delay(200*i).slideUp('100');               
                 
                  $('.page_three .Cpeople:eq('+i+') img').delay(200*i+200).animate({
                      'width':'67.82608695652173%',
                      'height': '76%',
                      'bottom':'15%',
                      'right':'15%'
                  },300);
                  $('.page_three .Cglass:eq('+i+')').delay(200*i+200).fadeIn('30');
               
              };


             $('.page_three .skill>div:eq(0)').click(function(event) {
                 $('.page_three .content1').css('animation', 'con1_1 1s both');
                 $('.page_three .fx1').delay(500).show('400');
             });
             $('.page_three .fx1').click(function(event) {
                 $('.page_three .content1').css('animation', 'con1_2 1s both');
                 $('.page_three .fx1').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(1)').click(function(event) {
                 $('.page_three .content2').css('animation', 'con2_1 1s both');
                 $('.page_three .fx2').delay(500).show('400');
             });
             $('.page_three .fx2').click(function(event) {
                 $('.page_three .content2').css('animation', 'con2_2 1s both');
                 $('.page_three .fx2').stop(true).hide(200);
             });
              $('.page_three .skill>div:eq(2)').click(function(event) {
                 $('.page_three .content3').css('animation', 'con3_1 1s both');
                 $('.page_three .fx3').delay(500).show('400');
             });
             $('.page_three .fx3').click(function(event) {
                 $('.page_three .content3').css('animation', 'con3_2 1s both');
                 $('.page_three .fx3').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(3)').click(function(event) {
                 $('.page_three .content4').css('animation', 'con4_1 1s both');
                 $('.page_three .fx4').delay(500).show('400');
             });
             $('.page_three .fx4').click(function(event) {
                 $('.page_three .content4').css('animation', 'con4_2 1s both');
                 $('.page_three .fx4').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(4)').click(function(event) {
                 $('.page_three .content5').css('animation', 'con5_1 1s both');
                 $('.page_three .fx5').delay(500).show('400');
             });
             $('.page_three .fx5').click(function(event) {
                 $('.page_three .content5').css('animation', 'con5_2 1s both');
                 $('.page_three .fx5').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(5)').click(function(event) {
                 $('.page_three .content6').css('animation', 'con6_1 1s both');
                 $('.page_three .fx6').delay(500).show('400');
             });
             $('.page_three .fx6').click(function(event) {
                 $('.page_three .content6').css('animation', 'con6_2 1s both');
                 $('.page_three .fx6').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(6)').click(function(event) {
                 $('.page_three .content7').css('animation', 'con7_1 1s both');
                 $('.page_three .fx7').delay(500).show('400');
             });
             $('.page_three .fx7').click(function(event) {
                 $('.page_three .content7').css('animation', 'con7_2 1s both');
                 $('.page_three .fx7').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(7)').click(function(event) {
                 $('.page_three .content8').css('animation', 'con8_1 1s both');
                 $('.page_three .fx8').delay(500).show('400');
             });
             $('.page_three .fx8').click(function(event) {
                 $('.page_three .content8').css('animation', 'con8_2 1s both');
                 $('.page_three .fx8').stop(true).hide(200);
             });
             $('.page_three .skill>div:eq(8)').click(function(event) {
                 $('.page_three .content9').css('animation', 'con9_1 1s both');
                 $('.page_three .fx9').delay(500).show('400');
             });
             $('.page_three .fx9').click(function(event) {
                 $('.page_three .content9').css('animation', 'con9_2 1s both');
                 $('.page_three .fx9').stop(true).hide(200);
             });

              $('.page_three .tap').css('animation', ' opc .8s 3s infinite alternate');
              $('.wrap').click(function(event) {
                  $('.page_three .tap').css({
                      left: '10%',
                      display: 'none'
                  });
              });            
          }else if(result < 0){  
          //*************************************************************************************two 
              $('.page_two>.text').show('900');
              // var earth = document.getElementById('earth');
              // var i = 1;
              // clearInterval(earth_time);
              // earth_time = setInterval(function(){
              //     if(i==48){
              //         i=1;
              //     }
              //     earth.setAttribute('src','imgs/two/'+i+'.jpg');
              //     i++;
              // }, 50);
          }

      }

      $('.slide').css('animation', 'slide 1s both infinite');
      $('.music').css('animation', 'mic 1s linear infinite');
      $('.musicoff').css('animation', 'mic 1s linear infinite');
      $('.page_one .yel').css('animation', 'down_yel 1s both,rote 2s both linear infinite alternate');
      $('.page_one .img4').css('animation', '.5s top_img4 .5s both,rote2 1.5s both linear infinite alternate'); 
      $('.page_one .r').css('animation', '1s r .5s both');
      $('.page_one .s').css('animation', '1s s1 .8s both');
      $('.page_one .e').css('animation', '1s e 1s both');
      $('.page_one .jian').css('animation', '1s jian .7s both');
      $('.page_one .cd').css('animation', '.4s cd 1s both');
      $('.page_one .l1').css('animation', '2s l1 3s both infinite');
      $('.page_one .l2').css('animation', '2s l2 3s both infinite');
      $('.page_one .l3').css('animation', '2s l3 3s both infinite');
    }
    










    















});