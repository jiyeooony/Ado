$(document).ready(function () {

  //터치 슬라이더
  var mySwiper = new Swiper ('.consulting .swiper-container', {
    // 필요한 옵션을 추가함
    //direction: 'vertical',    //horizontal(기본), vertical
    //loop: true,               //가장 처음과 마지막에서 무한 롤링 true, false(기본)
    navigation: {
      nextEl: '.consulting .swiper-button-next',
      prevEl: '.consulting .swiper-button-prev',
    },
    pagination: {
      el: '.consulting .swiper-pagination',
      type: 'fraction',   //bullets(동그라미아이콘), fraction (현재/전체)
      clickable: true,    //클릭하여 슬라이더 이동
    },
  });
});