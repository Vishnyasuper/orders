//$(document).ready(function(){


    function anchorScroll(boxAnchorLink){
        $(boxAnchorLink + ' a').on('click', function(e){
            e.preventDefault();
            var attr = $(this).attr('href').substring(1);
            var currentPosition = $(document).scrollTop();
            var idPosition = $('#'+attr).offset().top;
            var scrollTime = Math.abs(currentPosition - idPosition) / 3; // Math.abs - модуль числа.
            $('body,html').animate({'scrollTop':idPosition},scrollTime);
        });
    };


  anchorScroll('#to__menu');

//});

var t0, scrollTime;

$('#toTop').hide().on('click', function(event){
  event.preventDefault();
  scrollTime = $(document).scrollTop() / 2;
  $('body').animate({scrollTop:0}, scrollTime);
});

$(window).on('scroll', function(){
  clearTimeout(t0);
  t0 = setTimeout(function () {
      showScrollTopButton();
      console.log('scroll');
    }, 50);
});

showScrollTopButton();

function showScrollTopButton(){

    $('#toTop').fadeIn();
};


//$(document).ready(function(){
/*Для сортировки по стоимости и готовности*/
var $sortToggle = $('#sort-date');
$sortToggle.click(function(e) {
    if ($(this).hasClass('orders__sort-date-up')) {
      $(this).removeClass('orders__sort-date-up').addClass('orders__sort-date-down');

    } else if($(this).hasClass('orders__sort-date-down')) {
      $(this).removeClass('orders__sort-date-down').addClass('orders__sort-date-up');

    }
});

var $sortToggle = $('#sort-ready')
$sortToggle.click(function(e) {
    if ($(this).hasClass('orders__sort-ready-up')){
      $(this).removeClass('orders__sort-ready-up').addClass('orders__sort-ready-down');

    } else if($(this).hasClass('orders__sort-ready-down')) {
      $(this).removeClass('orders__sort-ready-down').addClass('orders__sort-ready-up');
    }

});

//});


// Проверка валидности поля email
//$(document).ready(function() {
    $('#email').blur(function() {
      if($(this).val() != '') {
        // Поле email заполнено
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '2px solid #ff5e42'});
                $('#valid').text('Верно');
            } else {
                $(this).css({'border' : '2px solid #3d78d8'});
                $('#valid').text('Не верно');
            }
      } else {
           // Поле email пустое, выводим предупреждающее сообщение
          $(this).css({'border' : '2px solid #3d78d8'});
          $('#valid').text('Поле email не должно быть пустым');
      }
    });
//});

