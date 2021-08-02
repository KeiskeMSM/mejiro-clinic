$(function(){
  $(function(){
    $('.nav-btn').on('click',function(){
      $(this).toggleClass('active');
      $('#nav').toggleClass('active');
      $('.inner').toggleClass('active');
  });
  });
  // スライダー
  $('.clinic-img').slick({
    centerMode: false,
    variableWidth: true,
    slidesToShow: 1,
    pauseOnHover: false,
    autoplay: true,	
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });
  // ページトップへ
  var pageTop = $(".page-top-button");
  pageTop.click(function () {
  $('body, html').animate({ scrollTop: 0}, 800);
    return false;
  });
  //フェードイン
  ScrollReveal().reveal('.cmn-section',{
    duration: 1200,
    viewFactor: 0.5,
    reset: false,
  });
});

