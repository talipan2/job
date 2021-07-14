$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu,.heder__burgerfon,.menu2').toggleClass("active");
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function () {
    $('.header__list').click(function (event) {
        $('.header__burger,.header__menu ,.menu2').toggleClass('active');
    });
});
