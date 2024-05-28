$(document).ready(function() {
    $('#carousel-img').slick({
        autoplay: true
    })

    $('.btn-menu button').click(function() {
        $('.menu').slideToggle()
    })
})