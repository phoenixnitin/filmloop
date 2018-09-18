$(document).ready(function(){
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var floopHeight = $("#filmloop").height();
    $("#filmloop").css("margin-top", (winHeight - floopHeight)/2);
    $(".container-block").height($(window).height());
    $(".ques-container").eq(1).height($(".ques-container").first().height());
    $(".our-pricing-ques-container").eq(1).height($(".our-pricing-ques-container").first().height());
});