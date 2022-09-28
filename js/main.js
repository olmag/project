$('.header__navigation__btn').click(function (){
    $(this).toggleClass('open');
    $('.header__navigation').toggleClass('active');
    $('.header__navigation__background').toggleClass('active');
    $('.close__btn').toggleClass('active');
})

$('.navigation__item').click(function (){
    $('.header__navigation__btn').removeClass('open');
    $('.header__navigation').removeClass('active');
    $('.header__navigation__background').removeClass('active');
    $('.close__btn').removeClass('active');
})

$('.close__btn').click(function (){
    $('.header__navigation__btn').removeClass('open');
    $('.header__navigation').removeClass('active');
    $('.header__navigation__background').removeClass('active');
    $('.close__btn').removeClass('active');
})

$('#team').slick({
    dots: true,
    arrows: false
});