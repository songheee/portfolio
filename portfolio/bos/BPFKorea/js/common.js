$(document).ready(function(){
      $(window).scroll(function(e){
          e.preventDefault();
          var wScrolltop = $(window).scrollTop();

          if(wScrolltop > 90){
             $(".top").show();
             $(".scroll").addClass("fixed");
             
             }else{
             $(".top").hide();
             $(".scroll").removeClass("fixed");
             
             }
      });/*scroll*/
    
      var menu_bar = $(".navi .menu-gnb .menu-item");
      $(menu_bar).click(function(e){
          e.preventDefault();
          $(this).children().addClass("active");
          $(this).siblings().children().removeClass("active");
      });/*menu bottom bar*/
    
      $(".top").click(function(){
          $("html, body").animate({'scrollTop':'0'},400)
      });/*click*/
    
        
    
      $(".top_lang").click(function(e){
            e.preventDefault();
            $(this).toggleClass("on");
            if($(this).hasClass("on")){
                 $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("01","02"))
                 $(this).next().animate({'opacity':'1'}, 100);

             }else{
                 $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("02","01"))
                 $(this).next().animate({'opacity':'0'}, 100);

             }
      }); /*언어변경*/
      
      $(".top_change .top_en").click(function(){
          $(".top_lang").children("a").text("EN");
      });
      $(".top_change .top_kr").click(function(){
          $(".top_lang").children("a").text("KR");
      });/*top부분 언어누르면 해당언어로 text바뀜 */

    
        var on_color = $(".lang ul li")
      $(on_color).click(function(e){
            e.preventDefault();
            $(this).children().addClass("color");
            $(this).siblings().children().removeClass("color");
      });/*언어색변경*/
    
    
      $(".col_2 ul .en").click(function(e){
          e.preventDefault();
          $(this).toggleClass("on");
          if($(this).hasClass("on")){
              $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("01","02"))
              $(".foot_rang").animate({'opacity':1},100);
              
              
          }else{
              $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("02","01"))
              $(".foot_rang").animate({'opacity':0},100);

          }
          
      });/*푸터 언어변경*/
    
      var on_color = $(".foot_rang ul li")
      $(on_color).click(function(e){
            e.preventDefault();
            $(this).children().addClass("color_f");
            $(this).siblings().children().removeClass("color_f");
      });/*푸터 언어색변경*/

    
      $(".top_change .top_en").click(function(){
          $(".en").children("a").text("EN");
      });
      $(".top_change .top_kr").click(function(){
          $(".en").children("a").text("KR");
      });/*foot부분 언어누르면 해당언어로 text바뀜 */
      
    
    
      $(".cooke-bar img").click(function(e){
          e.preventDefault();
         $(".cooke-bar").hide();
      });/*쿠키바 사라짐*/
    
        
    
});/**/
