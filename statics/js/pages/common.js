$(function () {
    $("select.J_pb_select").each(function () { //产品页 排序选择
        var sb = new SelectBox({
            selectbox: $(this),
            width: 80
        });
    });
    $(".tab").tab({
        tab_type: "mouseover"
    });
    $("div#obj-details").tab({
        tab_type: "click"
    });
    $('#demo1').banqh({
        box: "#slide_box", //总框架
        pic: "#slide-bigImg", //大图框架
        pnum: "#slide-pnum", //小图框架
        prev_btn: "#prev_btn", //小图左箭头
        next_btn: "#next_btn", //小图右箭头
        autoplay: false, //是否自动播放
        interTime: 5000, //图片自动切换间隔
        delayTime: 400, //切换一张图片时间
        pop_delayTime: 400, //弹出框切换一张图片时间
        order: 0, //当前显示的图片（从0开始）
        picdire: true, //大图滚动方向（true为水平方向滚动）
        mindire: true, //小图滚动方向（true为水平方向滚动）
        min_picnum: 5, //小图显示数量
    })

    $("#J-category-bar").on("mouseover", function () {
        $("#J-category-menu").show();
    }).on("mouseout", function () {
        $("#J-category-menu").hide();
    })
    $("#J-category-menu").on("mouseover", function () {
        $("#J-category-menu").show();
    }).on("mouseout", function () {
        $("#J-category-menu").hide();
    })

    $(".j-mainmenubox>li>a").hover(function () {
        $(this).next(".j-submenubox").stop().fadeIn();
    }, function () {
        $(this).next(".j-submenubox").stop().fadeOut();
    });
    $(".j-submenubox").hover(function () {
        $(this).stop().fadeIn();
    }, function () {
        $(this).stop().fadeOut();
    });
});

// 加入收藏
function addFavorite() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    } else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    } else if (document.all) {
        try {
            window.external.addFavorite(url, title);
        } catch (e) {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    } else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}

//返回顶部
function scrolltop() {
    var $h = $(window).height();
    var $ws = $(window).scrollTop();
    $(window).scroll(function () {
        var $ws = $(window).scrollTop();
        if ($ws > $h) {
            $('.scrolltop').show();
        } else {
            $('.scrolltop').hide();
        }
    })
    $('.scrolltop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
}

function selectMore() {
    $(".J_more_classification").hover(function () {
        $(this).next().show();
    }, function () {
        var _this = this;
        $(_this).next().hide();
        //setTimeout(function(){},500)
    });
    $(".J_classification_box").hover(function () {
        $(this).show();
    }, function () {
        $(this).hide();
    })
}
