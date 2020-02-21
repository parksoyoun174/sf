$(function () {
    var w = $(window).width();

    $(window).resize(function () {
        w = $(window).width();
        console.log(w);

        if (w > 767) {
            if ($("#nav>li").hasClass("on")) {
                $("#nav>li").find(".sub").css("display","none");
                $("#nav>li").removeClass("on");
            }
        }
        //ham 480
        if (w < 480) {
            $(".hamBtn").click(function () {
                $("#nav").stop().animate({
                    "left": "0"
                }, 1000);
                $(".close").stop().animate({
                    "right": "7%"
                }, 1000);
                $(".m_subBg").stop().fadeIn(300);
            })
        }
        //

    })

    //    nav
    $("#nav>li").on("mouseover", function () {
        if (w > 767) {
            $(".sub").stop().slideDown(300);
            $(".subBg").stop().slideDown(300);
        }
    })


    $("#nav>li").on("mouseleave", function () {
        if (w > 767) {
            $(".sub").stop().slideUp(300);
            $(".subBg").stop().slideUp(300);
        }
    })


    $("#nav>li").on("click", function () {
        if (w < 767) {
            $(this).find(".sub").stop().slideToggle(300);
            $(this).toggleClass("on");
        }
    })

    //    search
    //    몇번클릭됐는지체크
    var search = 0;
    $(".search").click(function () {
        search++;
        if (search % 2 == 1) {
            $(this).find("input").css("display", "block");
        } else {
            $(this).find("input").css("display", "none");
        }
    })

    //    banner
    //    몇번째배너인지체크
    var sNum = 0;
    setInterval(function () {
        $(".banner>li").eq(sNum).stop().fadeIn(300).siblings().stop().fadeOut(500);
        $(".cBtn>li").eq(sNum).addClass("active").siblings().removeClass("active");
        if (sNum == 5) {
            sNum = 0;
            $(".banner>li").eq(0).stop().fadeIn(300).siblings().stop().fadeOut(500);
            $(".cBtn>li").eq(sNum).addClass("active").siblings().removeClass("active");
        }
        sNum++;
        var bgImg = sNum;
        $("#container").css({
            "background-image": "url(../images/v_" + bgImg + ".jpg)"
        });
    }, 5000)
    $(".cBtn>li").on("click", function () {
        sNum = $(this).index();
        $(".banner>li").eq(sNum).stop().fadeIn(300).siblings().stop().fadeOut(500);
        $(".cBtn>li").eq(sNum).addClass("active").siblings().removeClass("active");
        var backImg = sNum + 1;
        $("#container").css({
            "background-image": "url(../images/v_" + backImg + ".jpg)"
        });
    })

    //    hamBtn
    $(".hamBtn").click(function () {
        $("#nav").stop().animate({
            "left": "0"
        }, 1000);
        $(".close").stop().animate({
            "right": "5%"
        }, 1000);
        $(".m_subBg").stop().fadeIn(300);
    })



    $(".close").click(function () {
        $("#nav").stop().animate({
            "left": "-85%"
        }, 1000);
        $(".close").stop().animate({
            "right": "-77%"
        }, 1000);
        $(".m_subBg").stop().fadeOut(300);
        $(".sub").stop().slideUp(300);
        $("#nav>li").removeClass("on");
    })



    //   더보기 클릭횟수체크
    var moreBtn = 0;
    $(".moreBtn>a").click(function () {
        moreBtn++;
        if (moreBtn % 2 == 1) {
            $(".more").css("height", "260px");
            $(".moreBtn>a").css("bottom", "320px");
        } else {
            $(".more").css("height", "0");
            $(".moreBtn>a").css("bottom", "60px");
        }
        $(".moreBtn>a").toggleClass("active");
    })
})
