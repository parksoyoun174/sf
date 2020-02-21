$(function () {

    //    모바일 햄버튼
    var count = 0;

    $(".hBtn").click(function () {
        count++;
        if (count % 2 == 1) {
            $(".navBg").stop().animate({
                "left": "0"
            }, 1000)
            $(this).find("img").attr("src", "images/close.png");
        } else {
            $(".navBg").stop().animate({
                "left": "-100%"
            }, 1000)
            $(this).find("img").attr("src", "images/mHam.png");
        }
    })

    $("#nav>li").click(function () {
        $(this).children(".sub").stop().slideToggle(500);
        $(this).siblings().children(".sub").stop().slideUp(500);

        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    })

    //    visual

    var sNum = 0;

    var btn = $(".cbtn>li");

    var obj = $(".banner>li").clone();
    $(".banner").append(obj);

    btn.on("click", function () {
        sNum = $(this).index();
        console.log(sNum);
        moveBanner();
    })

    function moveBanner() {
        if (sNum == 2) {
            btn.eq(0).addClass("active").siblings().removeClass("active");
        }
        btn.eq(sNum).addClass("active").siblings().removeClass("active");
        $(".banner").stop().animate({
            "margin-left": -sNum * 100 + "%"
        }, 1000)
    }


    var timer = setInterval(function () {
        if (sNum == 2) {
            sNum = 0;
            $(".banner").css("margin-left", 0);
        }
        sNum++;
        moveBanner();
    }, 3000);

    $("#visual").mouseover(function () {
        clearInterval(timer);
    })

    $("#visual").mouseleave(function () {
        timer = setInterval(function () {
            if (sNum == 2) {
                sNum = 0;
                $(".banner").css("margin-left", 0);
            }
            sNum++;
            moveBanner();
        },3000)
    })


})
