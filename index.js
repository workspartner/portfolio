$(function(){
    $('.menber').hide();
    $(window).scroll(function () {
        var currentPosition = $(window).height() + $(window).scrollTop();
        var menberTop = $(".menber").offset().top;
        if (menberTop < currentPosition) {
            $(".menber").fadeIn(1000);
        }
    });
  });