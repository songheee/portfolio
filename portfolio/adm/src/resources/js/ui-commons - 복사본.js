
//검색박스가 있는 셀렉트박스 스타일(select2)
(function(selectStyle){
    $('.select2').select2();
})();

//Datepicker Localization
(function($){
    $.fn.datepicker.dates['kr'] = {
        days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
        daysShort: ["일", "월", "화", "수", "목", "금", "토", "일"],
        daysMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    };
}(jQuery));

//일반적인 날짜선택방식(datepicker)
(function(datepicker){
    //Date picker
    $('.datepicker').datepicker({
        language: "kr",
        format: 'yyyy-mm-dd',
        autoclose: true,
        locale: {
            format: 'yyyy-mm-dd',
            applyLabel: '확인',
            cancelLabel: '취소',
            fromLabel: '시작일',
            toLabel: '종료일',
            daysOfWeek: ['일', '월', '화', '수', '목', '금','토'],
            monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            firstDay: 1
        }
    }).val(moment().subtract(1, 'days').format('YYYY-MM-DD'));//어제 기준
})();

//기간선택방식(datergpicker)
(function(daterangepicker){
    //Date range picker
    $(function() {

        var start = moment().subtract(7, 'days');
        var end = moment().subtract(1, 'days');

        function cb(start, end) {
            $('.datergpicker').val(start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
        }
        $('.datergpicker').daterangepicker({
            startDate: start,
            endDate: end,
            locale: {
                format: 'YYYY-MM-DD',
                applyLabel: '확인',
                cancelLabel: '취소',
                fromLabel: '시작일',
                toLabel: '종료일',
                daysOfWeek: ['일', '월', '화', '수', '목', '금','토'],
                monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                firstDay: 1
            },
        },
            function (start) { startDate = start.format('YYYY-MM-DD') },
            function (end) { endDate = end.format('YYYY-MM-DD') },
            cb
        );

        cb(start, end);
    });
})();

//공지사항/푸시 등의 기간선택방식(post-datergpicker)
(function(postDaterangepicker){
    //Date range picker
    $(function() {

        var start = moment().subtract(0, 'days');
        var end = moment().subtract(-1, 'days');

        function cb(start, end) {
            $('.post-datergpicker').val(start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
        }
        $('.post-datergpicker').daterangepicker({
                minDate: moment(),
                startDate: start,
                endDate: end,
                locale: {
                    format: 'YYYY-MM-DD',
                    applyLabel: '확인',
                    cancelLabel: '취소',
                    fromLabel: '시작일',
                    toLabel: '종료일',
                    daysOfWeek: ['일', '월', '화', '수', '목', '금','토'],
                    monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                    firstDay: 1
                },
            },
            function (start) { startDate = start.format('YYYY-MM-DD') },
            function (end) { endDate = end.format('YYYY-MM-DD') },
            cb
        );

        cb(start, end);
    });
})();

//버튼형 기간선택방식(btn_daterg)
(function(daterangeButton){
    //Date range as a button
    $(function() {

        var start = moment().subtract(7, 'days');
        var end = moment().subtract(1, 'days');

        function cb(start, end) {
            $('.btn_daterg span').html(start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
        }

        $('.btn_daterg').daterangepicker({
            startDate: start,
            endDate: end,
            opens: "center",
            ranges   : {
                '1주일'   :   [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
                '1개월'   :   [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
                '3개월'   :   [moment().subtract(90, 'days'), moment().subtract(1, 'days')],
                '6개월'   :   [moment().subtract(180, 'days'), moment().subtract(1, 'days')]
            },
            locale: {
                format: 'YYYY-MM-DD',
                applyLabel: '확인',
                cancelLabel: '취소',
                fromLabel: '시작일',
                toLabel: '종료일',
                separator: "~",
                daysOfWeek: ['일', '월', '화', '수', '목', '금','토'],
                monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                firstDay: 1,
                customRangeLabel: "직접 입력"
            }
        }, cb);

        cb(start, end);

    });
})();

//체크&라디오 플러그인(iCheck)
(function(iCheck){
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass   : 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass   : 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass   : 'iradio_flat-green'
    })
})();

/*주문관리-결제완료-배송준비처리 클릭시*/
$(document).ready(function(){
   $(".refund_btn_01").click(function(){
      alert("주문목록을 선택해주세요") 
   });
});








/*팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".id_popup").click(function(e){
       e.preventDefault()
      $(".none").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".none").hide();
    });
});





/*회원정보 팝업 메뉴 네비 클릭시*/
var tm=$(".member_list_2 li");
var tc=$(".tab-con");

tm.click(function(e){
    e.preventDefault();
    var target=$(this).attr("date-target");
    
    tm.removeClass("active")
    $(this).addClass("active")
    
    tc.hide();
    $("#"+target).show();
    $(".member_line_l").animate({"left":"-250px"})
});



/*회원정보 팝업 더보기메뉴*/
$(document).ready(function(){
   $(".mobile_menu_popup>a").click(function(){
       $(this).toggleClass("on");
       
       if($(this).hasClass("on")){
           $(".member_line_l").animate({"left":"0px"})
       }else{
           $(".member_line_l").animate({"left":"-250px"})
           
       }
   })
});

/*팝업창 문의내역 상세페이지(문의내용클릭시)*/
$(document).ready(function(){
    
    $(".question_1").click(function(){
       $(".question_0").hide();
       $(".question_2").show();
    });


/*팝업창 문의내역 상세페이지(목록보기클릭시 목록보이기)*/

   $(".pg_back").click(function(){
        $(".m_info").hide();
        $(".question_0").show();
   });

    /*팝업창_회원메모*/
    $(".memo_register").click(function(){
        alert("내용을 입력해주세요")    
    });
});

/*팝업창_회원메모 box*/
$(".popup-del").click(function(){
     var result =confirm("선택하신 메모 내용을 삭제하시겠습니까? 삭제된 메모는 복구되지 않습니다.");
    
    if(result){
        
    }else{
        
    }
});

/*팝업창_블랙리스트클릭시*/
$(".b_list").click(function(){
   var result =confirm("선택하신 회원을 블랙리스트에서 해제하시겠습니까?");
    
    if(result){
        
    }else{
        
    }
});


/*주문상세정보팝업 주문취소클릭시*/
$(".order_c_btn").click(function(){
   var result =confirm("주문취소를 진행 하시겠습니까? 취소된 주문은 복구할 수 없습니다.");
    
    if(result){
        
    }else{
        
    }
});

/*주문상세정보팝업 관리자메모*/
/*$(document).ready(function(){
   $(".popup_memo_btn").click(function(e){
       e.preventDefault();
       $(".popup_memo_btn").text("저장");
      $(".popup-memo_txt").attr("readonly", false) ;
   });
});*/













