$(document).ready(function(){
    
    /*scroll*/
    $(window).scroll(function(){
        var winScroll1 = $(window).scrollTop();
        var winScroll2 = $(window).scrollTop()+$(window).height()*0.06;
        var winScroll3 = $(window).scrollTop()+$(window).height();
        var docHeight = $(document).height()-100;
        var secIdx = $(".sec").length-1;
        $(".sec").each(function(idx){
          var _offset = $(".sec").eq(idx).offset().top;
            console.log(idx + "번 섹션");
            console.log(_offset + "px만큼 떨여져 있음");
            
            if(_offset <= winScroll2){
                $(".paging ul li a").removeClass("on");
                $(".paging ul li a").eq(idx).addClass("on");
            }else if(docHeight < winScroll3){
                $(".paging ul li a").removeClass("on");
                $(".paging ul li a").eq(secIdx).addClass("on");  
            }
        });/*each*/
        
        if(winScroll1 > 90){
            $(".btn-top").fadeIn();
            $("#header").addClass("up");
        }else{
            $(".btn-top").fadeOut();
            $("#header").removeClass("up");
        }
    });/*window scroll*/
    
    /*gnb*/
       var _gnb = $("#gnb").children("li");
       var _sec = $(".sec");
    
       _gnb.click(function(){
           var i =$(this).index();
           var offsetTop = _sec.eq(i).offset().top;
           
           $("html, body").animate({'scrollTop':offsetTop});
       });/*gnb click*/
    
    
    /*side-menu*/
    $(".all-menu").click(function(e){
        e.preventDefault();
       $(this).toggleClass("on")
        if($(this).hasClass("on")){
            $("#gnb_side").slideDown();
          }else{
            $("#gnb_side").slideUp();
          } 
    });/*all-menu click*/
    
    
    /*skill*/
    $(".percent").each(function(i,el){
        var _percent =$(el).attr("data-percent");
        
        $(el).delay(i*600)
             .animate({'width':_percent},300,function(){
             $(this).next("span").text(_percent);
        });   
    });/*each*/
    
    $(".btn-top").click(function(){
           $("html, body").animate({'scrollTop':'0'},1200,"easeOutExpo") 
        });/*btn click*/
    
    /*paging*/
   $(".paging ul li a").click(function(){
       $(this).addClass("on");
       $(this).parent().siblings().children("a").removeClass("on")
       
       var i = $(this).parent("li").index();
       var offsetT = $(".sec").eq(i).offset().top;
       
       $("html, body").animate({'scrollTop':offsetT});
       
   });/*a click*/
    
    /*이미지에 마우스 올릴때*/
    $("#work-item-lst>li").mouseenter(function(e){
        e.preventDefault();
       $(this).find(".desc").animate({'left':"10px", 'font-size':'18px'});
    });
    
    $("#work-item-lst>li").mouseleave(function(e){
        e.preventDefault();
       $(this).find(".desc").animate({'left':'-900px'});
    });
  
    /*그래픽 슬라이더*/
    $('#gallery').bxSlider({
        mode:'fade',
        controls:false,
        pagerCustom: '#bx-pager',
        slideWidth: 1200
        });

});/*ready*/