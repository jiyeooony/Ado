$(document).ready(function() {
    var timer = 0;
    var scrollY;

    $(window).on('scroll', function () {
        clearTimeout(timer);

        //setTimeout(함수, 시간간격);
        setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            //스크롤움직임+윈도창높이 > .fade의 위치 + .fade의 높이
            var winBottom = scrollY + $(this).height()*0.8;
            console.log(winBottom);
            //$(반복적으로 실행할 선택자).each(function (인덱스, 엘리먼트) {});
            $('.fade').each(function () {
                var fadeBottom = $(this).offset().top ; //가까이에 온 경우
                if (winBottom > fadeBottom) $(this).addClass('on');
                else $(this).removeClass('on');
            });

        }, 100);
    });

});