
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



/*----------------체크박스/라디오버튼----------*/

/*결제방법 체크박스전체선택*/
$( document ).ready( function() {
    $( '.check_all_ab' ).click( function() {
      $( '.check_ab' ).prop( 'checked', this.checked );
    } );
  } );

/*배송준비상태 체크박스전체선택*/
$( document ).ready( function() {
    $( '.chk_all' ).click( function() {
      $( '.chk_deli' ).prop( 'checked', this.checked );
    } );
  } );

/*테이블 체크박스전체선택*/
$( document ).ready( function() {
    $( '.tb_num' ).click( function() {
      $( '.tr_chk' ).prop( 'checked', this.checked );
    } );
  } );


/*-------------------주문관리---------------------*/

/*주문관리-결제완료-배송준비처리 클릭시*/
$(document).ready(function(){
   $(".btn_alert").click(function(){
      alert("주문목록을 선택해주세요") 
   });
});



/*주문상세정보팝업 주문취소클릭시*/
$(".order_c_btn").click(function(){
   var o_result =confirm("주문취소를 진행 하시겠습니까? 취소된 주문은 복구할 수 없습니다.");
    
    if(result){
        
    }else{
        
    }
});

/*주문상세정보팝업 관리자메모_입력클릭시 text박스 활성화*/
$(document).ready(function(){
   $(".popup_memo_btn").click(function(e){
       e.preventDefault();
       $(".popup_memo_btn").text("저장");
      $(".popup-memo_txt").attr("readonly", false);
   });
});



/*-----주문상세정보 팝업창제이쿼리-----*/

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
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".none").hide();
    });
});



/*------------------회원관리---------------------*/
/*회원조회_블랙리스트등록시 alert*/
$(".b_list_add").click(function(){
   alert("선택한 회원이 없습니다.");
});

/*회원관리_블랙리스트 해제시 alert*/
$(".member_black").click(function(){
   var b_result =confirm("선택하신 회원을 블랙리스트에서 해제하시겠습니까?");
    
    if(b_result){
        alert("블랙리스트 해제가 완료되었습니다.");
    }else{
        
    }
});

/*-----회원정보 팝업창제이쿼리-----*/

/*팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".member_popup").click(function(e){
       e.preventDefault()
      $(".popup_none").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".popup_none").hide();
    });
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".popup_none").hide();
    });
});




/*-------------고객센터------------*/

/*고객센터_공지사항_등록 얼럿창*/
$(".customer_r").click(function(){
   alert("공지제목과 내용을 입력해주세요.");
});

/*고객센터_공지사항_삭제 얼럿창*/
$(".del_01").click(function(){
   var b_result =confirm("공지를 삭제하시겠습니까?");
    
    if(b_result){
        location.href = "KDM-009-0001.html"
    }else{
        
    }
});

/*고객센터_공지사항_공지등록클릭시 등록페이지로이동*/
$(".custom_center").click(function(){
    location.href = "KDM-009-0002.html"
});

$(".jq_btn").click(function(){
   location.href = "KDM-009-0001.html" 
});


/*고객센터_1:1문의 답변완료시 얼럿*/
$(".customer_1").click(function(){
   alert("답변 내용을 입력해주세요.");
});

/*고객센터_1:1문의클릭시 문의내용페이지로 이동*/
var pg=$(".notice_11");
pg.click(function(){
    location.href = "KDM-009-0004.html"
});

/*고객센터_1:1문의 취소시 이동*/
$(".jq_1_btn").click(function(){
   location.href = "KDM-009-0003.html" 
});



/*고객센터_상품문의 내용클릭시 페이지이동*/
var pg=$(".notice_12");
pg.click(function(){
    location.href = "KDM-009-0006.html"
});

/*고객센터_상품문의 취소시 페이지이동*/
$(".jq_2_btn").click(function(){
   location.href = "KDM-009-0005.html" 
});




/*-------------faq 카테고리 설정---------------- */
$(".category_btn").click(function(e){
    e.preventDefault();
   $(".category").show();
});


$(".faq_close").click(function(e){
    e.preventDefault();
   $(".category").hide();
});

$(".category_x").click(function(e){
    e.preventDefault();
   $(".category").hide();
});

/*faq카테고리 삭제시*/
$(".category_del").click(function(){
   var b_result =confirm("선택하신 FAQ카테고리를 삭제하시겠습니까? 삭제된 카테고리와 등록된 FAQ내용은 복구할 수 없습니다.");
    
    if(b_result){
        
    }else{
        
    }
});

/*faq상세페이지 삭제버튼*/
$(".faq_con").click(function(){
   var b_result =confirm("FAQ를 삭제하시겠습니까? 삭제된 FAQ내용은 복구할 수 없습니다.");
    
    if(b_result){
        
    }else{
        
    }
});

/*faq상세페이지 보기*/
$(".faq_detail_pg").click(function(){
   location.href = "KDM-009-0009.html"
});


/*faq상세페이지 등록클릭시*/
$(".faq_btn_add").click(function(){
   alert("질문과 답변 내용을 입력해주세요");
});

/*faq상세페이지 취소클릭시 페이지이동*/
$(".faq_btn_cancel").click(function(){
   location.href = "KDM-009-0007.html"
});

/*faq등록클릭시*/
$(".excel_btn_bg").click(function(){
   location.href = "KDM-009-0008.html"
});

$(".faq_btn_cancel_2").click(function(){
   location.href = "KDM-009-0007.html"
});



/*-------------------쇼핑몰설정--------------*/
/*국가등록클릭시 배송비등록페이지로 이동*/
$(".country_btn").click(function(){
    location.href = "KDM-010-0009.html"
});





/*상품관리_상품등록페이지_옵션사용/미사용시*/
$(document).ready(function(){
    var tabMenu =$(".option_tab_1");
    var tabCon =$(".option_tab");

    tabMenu.click(function(e){
        e.preventDefault();
        var _href =$(this).attr("href");

        tabCon.hide();
        $(_href).show();
        
    });
});/*ready*/



/*상품관리_상품등록_이미지 미리보기*/
// 이미지 정보들을 담을 배열
var sel_files = [];


$(document).ready(function() {
    $("#input_imgs").on("change", handleImgFileSelect);
}); 

function fileUploadAction() {
    $("#input_imgs").trigger('click');
}

function handleImgFileSelect(e) {

    // 이미지 정보들을 초기화
    sel_files = [];
    $(".imgs_wrap").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function(f) {
        if(!f.type.match("image.*")) {
            alert("확장자는 이미지 확장자만 가능합니다.");
            return;
        }

        sel_files.push(f);

        var reader = new FileReader();
        reader.onload = function(e) {
            var html = "<a href=\"javascript:void(0);\" onclick=\"deleteImageAction("+index+")\" id=\"img_id_"+index+"\"><img src=\"" + e.target.result + "\" data-file='"+f.name+"' class='selProductFile' title='Click to remove'></a>";
            $(".imgs_wrap").append(html);
            index++;

        }
        reader.readAsDataURL(f);

    });
}

/*이미지 클릭시 삭제*/
 function deleteImageAction(index) {

    sel_files.splice(index, 1);

    var img_id = "#img_id_"+index;
    $(img_id).remove(); 
}


/*------------------연예인관리---------------*/

/*연예인관리_연예인상세_삭제 클릭시 얼럿창*/
$(".del_02").click(function(){
   var b_result =confirm("연예인을 삭제하시겠습니까? 삭제 시 VOTE정산과 통계에서도 삭제되며 복구할 수 없습니다.");
    
    if(b_result){
        alert("연예인이 삭제되었습니다");
        location.href = "KDM-012-0001.html"
    }else{
        
    }
});

/*연예인관리_연예인등록클릭시 페이지 이동*/
$(".celeb_center").click(function(){
    location.href = "KDM-012-0002.html"
});

/*연예인관리_그룹관리_그룹등록클릭시 페이지 이동*/
$(".group_center").click(function(){
    location.href = "KDM-012-0008.html"
});

/*연예인관리_연예인등록_ 등록클릭시 페이지로이동*/
$(".enroll_01").click(function(){
    location.href = "KDM-012-0001.html"
});

/*연예인관리_연예인상세_ 등록클릭시 페이지로이동*/
$(".enroll_02").click(function(){
    location.href = "KDM-012-0001.html"
});


/*연예인관리_그룹관리 삭제 클릭시 얼럿창*/
$(".del_03").click(function(){
   var b_result =confirm("그룹을 삭제하시겠습니까?.삭제 시 소속된 연예인도 모두 삭제되며 VOTE정산과 통계에서도 삭제됩니다. 복구할 수 없습니다");
    
    if(b_result){
        alert("그룹과 소속된 연예인이 모두 삭제되었습니다.");
        location.href = "KDM-012-0007.html"
    }else{
        
    }
});

/*연예인관리_그룹상세_ 등록클릭시 페이지로이동*/
$(".enroll_03").click(function(){
    location.href = "KDM-012-0007.html"
});

/*연예인관리_그룹관리_ 등록클릭시 페이지로이동*/
$(".group_in").click(function(){
    location.href = "KDM-012-0008.html"
});


/*연예인관리_명예의전당_ 등록클릭시 페이지로이동*/
$(".new_center").click(function(){
    location.href = "KDM-012-0005.html"
});

/*연예인관리_명예의전당_ 등록클릭시 페이지로이동*/
$(".enroll_04").click(function(){
    location.href = "KDM-012-0004.html"
});


/*상품이미지등록시 */
$(".img_del").click(function (e) {
    e.preventDefault();
        $(".img_item").remove();
    });



/*-------tab 관련 제이쿼리------*/
/*tab관련 내용*/
$(document).ready(function(){
    $(".tab-menu a").click(function(){
        var i=$(this).index();  
        $(".tab-con .con").hide();
        $(".tab-con .con").eq(i).show();
        
    $(".tab-menu a").removeClass("on");
        $(this).addClass("on");
    });
});/*ready*/



/*-----------------------게시물관리 팝업창제이쿼리-----------------*/

/*post 팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".content_list").click(function(e){
       e.preventDefault()
      $(".mobile_popup").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".mobile_popup").hide();
    });
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".mobile_popup").hide();
    });
});


/*게시물관리 팝업창 노출얼럿*/
$(".radio_btn").click(function(){
   alert("게시물이 비노출 처리되었습니다.");
});

/*게시물관리 팝업창 댓글삭제시 노출얼럿*/
$(".post_btn").click(function(){
   var p_result =confirm("댓글을 삭제하시겠습니까? 삭제된 댓글은 복구되지 않습니다.");
    
    if(p_result){
        
    }else{
        
    }
});

/*-----카파라치관련 팝업----------*/
/*팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".parazzi_list").click(function(e){
       e.preventDefault()
      $(".parazzi_popup").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".parazzi_popup").hide();
    });
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".parazzi_popup").hide();
    });
});

/*-----kaystory 팝업----------*/
/*팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".kaystory_popup").click(function(e){
       e.preventDefault()
      $(".kayStory").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".kayStory").hide();
    });
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".kayStory").hide();
    });
});

/*-----이벤트관리 팝업----------*/
/*팝업보기(아이디클릭시)*/
$(document).ready(function(){
   $(".kay_event_popup").click(function(e){
       e.preventDefault()
      $(".k_event").show();
   });

/*팝업 x클릭시*/

    $(".pop_up_btn").click(function(){
        $(".k_event").hide();
    });
    
/*팝업 닫기버튼클릭시*/
    
    $(".close_popup").click(function(){
       $(".k_event").hide();
    });
});











