$(document).ready(function () {
    $(".asd").click(function () {
        $(".tab_p").removeClass("on");
        $(this).children(".tab_p").addClass("on");
        $(".faq_acco").stop().hide();
        $(this).siblings().find(".faq_acco").stop().slideDown();
    });

    $(".acco_title").click(function () {
        if ($(this).hasClass("active")) {
            $(".acco_title").removeClass("active").next().stop().slideUp();
        } else {
            $(".acco_title").removeClass("active").next().stop().slideUp();
            $(this).addClass("active").next().stop().slideDown();
        }
    });
});
