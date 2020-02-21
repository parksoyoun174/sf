$(function () {
    var w = $(window).width();

    $(window).resize(function () {
        w = $(window).width();
        console.log(w);
        //ham
        if(w >480){
            $(".price, .sPrice").stop().fadeIn(1);
        }else{
            if($(".price").hasClass("on")){
                return
            }
            if($(".sPrice").hasClass("on")){
                return
            }
            $(".price, .sPrice").stop().fadeOut(0);
        }
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
    })

    //    서브메뉴
    $(".showInfo_menu>li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
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

    //요금
    $(".price_info").click(function () {
        $(".m_tableBg").stop().fadeIn(200);
        $(".priceClose").stop().fadeIn(200);
        $(".price").stop().fadeIn(200);
        $(".price").addClass("on");
    });
    $(".sPrice_info").click(function () {
        $(".m_tableBg").stop().fadeIn(200);
        $(".priceClose").stop().fadeIn(200);
        $(".sPrice").stop().fadeIn(200);
        $(".sPrice").addClass("on");
    });
    $(".priceClose").click(function () {
        $(".m_tableBg").stop().fadeOut(200);
        $(".price, .sPrice").stop().fadeOut(200);
        $(".price, .sPrice").removeClass("on");
    })
})
