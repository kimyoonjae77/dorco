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

    $(".language>p").click(function () {
        // $(".language_box").stop().fadeOut();
        $(".language_box").stop().fadeToggle();
    });
    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".not_js"));
        if (!isFamMenu) {
            $(".language_box").stop().fadeOut(300);
        }
    });

    $("#top_btn").click(function () {
        $("html,body").stop().animate({ scrollTop: "0" }, 500);
    });

    $(".site_btn").click(function () {
        $(".click_site").fadeToggle();
        // $(".fa-angle-down").css({ transform: "rotate(180deg)" });
    });
    $(window).click(function (e) {
        const isFamMenu2 = Boolean(e.target.closest(".site_btn"));
        if (!isFamMenu2) {
            $(".click_site").stop().fadeOut(300);
        }
    });
});
