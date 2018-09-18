$(document).ready(function(){
    var winHeight = jQuery(window).height();
    var winWidth = jQuery(window).width();
    var floopHeight = jQuery("#filmloop").height();
    $("#filmloop").css("margin-top", (winHeight - floopHeight)/2);
    $(".container-block").height(jQuery(window).height());
    $(".ques-container").eq(1).height(jQuery(".ques-container").first().height());
    $(".our-pricing-ques-container").eq(1).height(jQuery(".our-pricing-ques-container").first().height());
});