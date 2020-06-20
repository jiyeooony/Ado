$(document).ready(function() {
    var mySwiper1 = new Swiper ('#tabpanel1 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper2 = new Swiper ('#tabpanel2 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper3 = new Swiper ('#tabpanel3 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper4 = new Swiper ('#tabpanel4 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper5 = new Swiper ('#tabpanel5 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper6 = new Swiper ('#tabpanel6 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //1초후 hide()로 숨기기 (display: none 이면 터치 슬라이드는 동작하지 못한다)
    setTimeout(function () {
        //첫번째 swiper 실행될수 있도록 추가 제어
        $('#tab1').trigger('click');
    }, 1000);

    //1) 기본설정 => 첫번째 탭버튼과 탭패널을 활성화
    //(.active / tabIndex=0, aria-selected(탭버튼), aria-hidden(탭패널))
    $('[role="tab"]:first-of-type, [role="tabpanel"]:first-of-type').addClass('active').attr('tabIndex', 0);
    $('[role="tab"]:first-of-type').attr('aria-selected', true);
    $('[role="tabpanel"]:first-of-type').attr('aria-hidden', false);

    /* 2) 키보드 사용자 제어 : keydown
    방향키 이전, 방향키 다음, home과 end, enter와 space bar(click과 동일 기능) */
    $('[role="tab"]').on('keydown', function (e) {
        var key = e.keyCode;
        console.log(key);
        //이전(37), 다음(39), home(36), end(35), enter(13), space bar(32)
        switch (key) {
            case 37: //이전 방향키
                $(this).attr('tabIndex', -1); //나의 포커스를 제거하여 이전으로 이동
                //나자신이 가장 첫번째인지(마지막 li 포커스 이동), 그렇지 않은지(바로 앞 li 포커스 이동)
                if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
                else $(this).prev().attr('tabIndex', 0).focus();
                break;
            case 39: //다음 방향키
                $(this).attr('tabIndex', -1);
                if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
                else $(this).next().attr('tabIndex', 0).focus();
                break;
            case 36: //home
                e.preventDefault();     //기본 기능을 차단
                $(this).siblings('.first').attr('tabIndex', 0).focus();
                break;
            case 35: //end
                e.preventDefault();     //기본 기능을 차단
                $(this).siblings('.last').attr('tabIndex', 0).focus();
                break;
			/*
            case 13: //enter(13)
            case 32: //space bar(32)
                var $tg = $(this);  //tabActive() 함수를 호출하는 대상 지정
                tabActive($tg);				
			*/

        }
    });

    /* 3) 마우스 사용자 제어 : click
    현재 클릭한 탭버튼과 탭패널만 활성화 시키고 나머지는 비활성으로 되돌리기 */
    $('[role="tab"]').on('click', function () {
        var $tg = $(this);  //tabActive() 함수를 호출하는 대상 지정
        tabActive($tg);
    });

    function tabActive($target) {
        console.log($target);
        //탭 : 선택된 것은 활성화, 나머지는 비활성
        $target.addClass('active').attr({tabIndex: 0, 'aria-selected': true}).siblings().removeClass('active').attr({tabIndex: -1, 'aria-selected': false});

        //탭패널 : 선택된 것은 활성화, 나머지는 비활성
        console.log(typeof $target.attr('aria-controls'));
        /* string tabpanel3이라는 문자열 => 선택자
        $('#' + 'tabpanel3') => $('#tabpanle3') */
        $('#' + $target.attr('aria-controls')).show().attr({tabIndex: 0, 'aria-hidden': false}).siblings('[role="tabpanel"]').hide().attr({tabIndex: -1, 'aria-hidden': true});
    }
    //.tabpanel이 문서의 가운데 위치
	var timer;
	$(window).on('resize', function () {
		clearTimeout(timer);

		timer = setTimeout(function () {
			var winWid = $(this).width() - 30;
			var oneSize = $('[role="tab"]').outerWidth(true);
			$('[role="tablist"]').css('width', Math.floor(winWid / oneSize) * oneSize); 
		}, 50);
	});
	$(window).trigger('resize');
});