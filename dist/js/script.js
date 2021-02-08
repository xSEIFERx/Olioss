$('.container__burger').click(function() {
    $('.container__menu').fadeToggle(400);

    if ($('.container__burger').hasClass('container__burger_active')) {
        $('.container__burger').removeClass('container__burger_active');
    } else {
        $('.container__burger').addClass('container__burger_active');
    }
});

function bgSwitcher (value) {
    if (value) {
        $('input[value=' + value + ']').prop('checked', true);
    } 

    let inputValue = $('input[name=bg-switcher]:checked').val();
    let wrapper = $('.wrapper');

    wrapper.removeClass();
    wrapper.addClass('wrapper wrapper_bg-' + inputValue);
}

let currentSlide = 1;

function getNextSlideNumber () {
    return currentSlide + 1;
}

setInterval(function() {
    if (currentSlide === 4) {
        currentSlide = 1;
    } else {
        currentSlide = getNextSlideNumber();
    }

    bgSwitcher(currentSlide);
}, 5000);

$('.container__bg-button input').click(function(){
    bgSwitcher();  
});




//$('.header__burger_active').click(function() {
//        $('.header__burger_active').addClass('header__burger');
//        $('.header__burger_active').removeClass('header__burger_active');
//        $('.burger__wrap_active').addClass('burger__wrap');
//        $('.burger__wrap_active').removeClass('burger__wrap_active');
//        $('.header__burger_active span').addClass('header__burger span');
//        $('.header__burger_active span').removeClass('header__burger_active span');
//        $('.header__burger_active::before').addClass('header__burger::before');
//        $('.header__burger_active::before').removeClass('header__burger_active::before');
//        $('.header__burger_active::after').addClass('header__burger::after');
//        $('.header__burger_active::after').removeClass('header__burger_active::after');
//});

$('h1').hover(function () { 
    $('h1').addClass('animate__animated animate__bounce')
});

$('h1').mouseleave(function () { 
    $('h1').removeClass('animate__animated animate__bounce')
});

