// JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault(); $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }
        , 500)
}
)

jQuery(document).ready(function ($) {

    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 20
        }, 750);
    });

});

$('.open-close-btn').click(function () {
    $('.navigation-links').fadeToggle();
});

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.banner-wrapper nav').addClass('scrolled');
    } else {
        $('.banner-wrapper nav').removeClass('scrolled');
    }
})

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
