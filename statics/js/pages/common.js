$(function () {
    /* if ($("#MagnifierWrap").size() > 0) {
         MagnifierF("MagnifierWrap"); //产品放大镜
     }
     hidefliter(2);
     //首页搜索
     $("select.J-select").each(function () {
         var sb = new SelectBox({
             selectbox: $(this),
             width: 80
         });
     });*/
    $("select.J_pb_select").each(function () { //产品页 排序选择
        var sb = new SelectBox({
            selectbox: $(this),
            width: 80
        });
    });

    $(".tab").tab({
        tab_type: "mouseover"
    });
    $("#obj-details").tab({
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
        /*$(".J_lastNobor").each(function (e) {
            $(this).find("li").last().css("borderWidth", "0");
        })
        $(".J_lastborder tr").last().find("td").css("borderWidth", "0");
        $(".slide-box").imagesSlide(); //广告图切换

        $(".technology").tab({
            tab_type: "mouseover"
        });
        $(".special-box li").last().css("paddingBottom", "10px");
        $(".pl_group .pl_row,.J_news_style1").last().css({
            "border": "none",
            "margin": "0"
        })
        $(".J-productClass").on("mouseover", "li", function () {
            $(this).addClass("hover");
        })
        $(".J-productClass").on("mouseout", "li", function () {
            $(this).removeClass("hover");
        });
        $(".J_marquee_list").marquee({ //
            auto: true,
            interval: 3000,
            speed: 500,
            showNum: 6,
            stepLen: 6
        });*/
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
//表格隔行变色

function eventbgc(event) {
    $(event).find("tr:even").addClass("even");
}

function shade(event) {
    if (event) {
        $("body").append("<div class='shade'></div>");
        $(".shade").css({
            'width': '100%',
            'height': $(document).height(), //遮罩层显示并全屏
            'background': '#000',
            'position': 'absolute',
            'zIndex': '1999',
            'opacity': '0.7',
            'top': '0',
            'left': '0'
        })
    } else {
        $(".shade").fadeOut();
    }
}
// num: 显示个数
//
function hidefliter(num) {
    if (num != 0) {
        $(".filter_box").find(".J_row_fliter").hide();
        for (var i = 0; i < num; i++) {
            $(".filter_box").find(".J_row_fliter").eq(i).show();
        };
    } else {
        $(".filter_box").find(".J_row_fliter").show();
    }

}
//产品 更多/更少
function toggleshow(e) {
    if ($(e).hasClass("less")) {
        $(e).removeClass("less");
        hidefliter(2);
    } else {
        $(e).addClass("less");
        hidefliter(0);
    }
}

function dologin() {
    layer.open({
        type: 1,
        title: "登录电力工业网账号",
        skin: 'login_layer', //样式类名
        closeBtn: 0, //不显示关闭按钮
        shift: 2,
        area: ['400px', '380px'],
        shadeClose: true, //开启遮罩关闭
        content: $(".login_layer_box")
    });
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
