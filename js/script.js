/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/* =========================================
                Button CLick
============================================ */
$(document).ready(function () {
    $("#change_").click(function() {
        $('#com_1').addClass('hidden');
        $('#com_2').removeClass('hidden');
        $("#change_").addClass('hidden');
        $("#change_2").removeClass('hidden');
    });
    $("#change_2").click(function() {
        $('#com_2').addClass('hidden');
        $('#com_1').removeClass('hidden');
        $("#change_").removeClass('hidden');
        $("#change_2").addClass('hidden');
    });

    $("#flip_").click(function () {
        $("#right-caption").addClass('left');
        $("#right-caption").addClass('c_p');
        $("#left-image").addClass('right');
        $("#flip_").addClass('hidden');
        $("#flip_2").removeClass('hidden');
    });

    $("#flip_2").click(function () {
        $("#right-caption").removeClass('left');
        $("#right-caption").removeClass('c_p');
        $("#left-image").removeClass('right');
        $("#flip_2").addClass('hidden');
        $("#flip_").removeClass('hidden');
    });
});
/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});