$(document).ready(function(){
    // mob-menu
    $('.mob-menu').click(function(){
        $(this).toggleClass('active');
        $('.nav-wrapper').slideToggle();
    })
    $('#basic').flagStrap();
    $('.flagstrap').click(function(){
        $(this).toggleClass('active');
        $('.flagstrap ul').slideToggle();
    })
});