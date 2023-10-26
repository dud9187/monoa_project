
$(function(){

    // 풀페이지

     var divs = $('section');
    var div = 0;
    div = -1
    divs.each(function(i) {
        if (div < 0 && ($(this).offset().top >=       $(window).scrollTop())) {
            div = i;
        }
    });
    $(window).on('mousewheel DOMMouseScroll', function(e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        if (div > 0) {
            div--;
        }
        } else {
        if (div < divs.length) {
            div++;
        }
        }
        $('html,body').stop().animate({
        scrollTop: divs.eq(div).offset().top
        }, 200);
        return false;
    });
    $(window).resize(function() {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });

    setTimeout( ()=>{ $('header ').css('opacity','1') }, 6000);
    // 메인배너슬라이드
    var swiper = new Swiper(".main_bn_swiper", {
    pagination: {
    el: ".main-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".main-button-next",
    prevEl: ".main-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        loop : true, 
        loopAdditionalSlides : 1,
        speed : 1000,
    on: {
        slideChange : function() {

            },
        },
    });

    //our tab메뉴
    $('ul.tabs .our_tab').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('ul.tabs .our_tab').removeClass('on');
        $('.our_tab_cnt').removeClass('on');
        $(this).addClass('on');
        $('#' + activeTab).addClass('on');
    });

    //our project 슬라이드1
    var swiper = new Swiper(".our_slide1", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 
    var swiper = new Swiper(".our_slide2", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 
    var swiper = new Swiper(".our_slide3", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 
    var swiper = new Swiper(".our_slide4", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 
    var swiper = new Swiper(".our_slide5", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 
    var swiper = new Swiper(".our_slide6", {
        direction: "vertical",
        mousewheel: {
            invert: false,
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
    }); 


    // our story slide
    var swiper = new Swiper(".story_slide", {
        slidesPerView: "auto",
        spaceBetween: 0,
    });
    
    // footer 주소복사
    $('.copy').click(function () {
        var copyText = document.getElementById("copy_id");//클립보드에 복사할 텍스트 가져옴
        var textArea = document.createElement("textarea");//textarea 생성
        
        textArea.value = copyText.textContent;//textarea에 텍스트 입력
        document.body.appendChild(textArea);//body에 textarea 추가
        
        textArea.select();//선택
        document.execCommand("Copy");//복사
        textArea.remove();//생성한 textarea 삭제
        
        alert("도로명 주소가 복사되었습니다.");
    });
});
