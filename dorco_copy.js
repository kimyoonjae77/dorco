$(document).ready(function () {
    let i = 0;
    let count = $(".carousel_right>li").length;

    $(".gnb>li").mouseenter(function () {
        $(this).children(".sub").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(this).children(".sub").stop().fadeOut();
    });

    $(".language>p").click(function () {
        // $(".language_box").stop().fadeOut();
        $(".language_box").stop().fadeToggle();
    });
    // $("div:not(.language)").click(function () {
    //     $(".language_box").stop().fadeOut();
    // });
    // $(window).click(function (event) {
    //     const isFamMenu = Boolean(event.target.closest(".language_box"));
    //     if (!isFamMenu) {
    //         // $(".site").removeClass("site_cover");
    //         $(".language_box").stop().fadeOut();
    //     }
    // });
    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".not_js"));
        if (!isFamMenu) {
            $(".language_box").stop().fadeOut(300);
        }
    });
    // $(window).click(function (event) {
    //     if (
    //         !$(event.target).closest(".not.js").length &&
    //         !$(event.target).closest(".language_box").length
    //     ) {
    //         $(".language_box").fadeOut();
    //     }
    // });
    $(".scale_box>li").mouseenter(function () {
        $(this).find(".real_content").css("height", "340px");
        $(this).find(".real_content").css("border-radius", "15pt");
        $(this).find(".real_content").css("z-index", "1");
        $(this).find(".eng_p").css("opacity", "0");
        $(this).find(".kr_p").css("opacity", "1");
    });

    $(".scale_box>li").mouseleave(function () {
        $(this).find(".real_content").css("height", "160px");
        $(this).find(".real_content").css("border-radius", "10rem");
        $(this).find(".real_content").css("z-index", "0");
        $(this).find(".eng_p").css("opacity", "1");
        $(this).find(".kr_p").css("opacity", "0");
    });

    $(".scale_box>li:nth-child(2), .scale_box>li:nth-child(3)").mouseenter(
        function () {
            $(this).find(".real_content").css("height", "300px");
        }
    );
    $(".scale_box>li:nth-child(4)").mouseenter(function () {
        $(this).find(".real_content").css({ height: "400px" });
    });

    slide1();

    $(".next").click(function () {
        next1();
        if (i == count - 1) {
            i = 0;
        } else {
            i++;
        }
        slide1();
    });

    $(".prev").click(function () {
        $(".carousel_left")
            .stop()
            .animate({ "margin-top": "0vh" }, 200, function () {
                $(".carousel_left>li:last-child").prependTo(".carousel_left");
                $(".carousel_left").css({ "margin-top": "-100vh" });
            });
        if (i == 0) {
            i = count - 1;
        } else {
            i--;
        }
        slide1();
    });

    let autoSlide = setInterval(function () {
        // next1();
        $(".next").click();
    }, 5000);

    $(".main1").mouseenter(function () {
        clearInterval(autoSlide);
    });

    $(".main1").mouseleave(function () {
        autoSlide = setInterval(function () {
            $(".next").click();
        }, 5000);
    });

    // let autoSlide = setInterval(function () {
    //     next1();
    //     if (i == count - 1) {
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    //     slide1();
    // }, 5000);

    // $(".main1").mouseenter(function () {
    //     clearInterval(autoSlide);
    // });

    // $(".main1").mouseleave(function () {
    //     autoSlide = setInterval(function () {
    //         next1();
    //     if (i == count - 1) {
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    //     slide1();
    // },5000);

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
    // $(window).click(function (event) {
    //     if (
    //         !$(event.target).closest(".site_btn").length &&
    //         !$(event.target).closest(".click_site").length
    //     ) {
    //         $(".click_site").fadeOut();
    //     }
    // });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#top_btn").stop().fadeIn(500);
        } else {
            $("#top_btn").stop().fadeOut(500);
        }
    });

    // 함수선언
    function next1() {
        $(".carousel_left")
            .stop()
            .animate({ "margin-top": "-200vh" }, 200, function () {
                $(".carousel_left>li:first-child").appendTo(".carousel_left");
                $(".carousel_left").css({ "margin-top": "-100vh" });
            });
    }

    function next2() {
        $("");
    }

    function slide1() {
        $(".f_floor").stop().css({ top: "-230px" });
        $(".s_floor").stop().css({ top: "-150px" });
        $(".carousel_right>li").stop().fadeOut();
        $(".carousel_right>li")
            .eq(i)
            .stop()
            .fadeIn(function () {
                $(".f_floor").animate({ top: "0px" });
                $(".s_floor").animate({ top: "0px" });
            });
    }
});
