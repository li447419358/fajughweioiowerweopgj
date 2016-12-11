;
(function ($) {
    // tab
    $.fn.tab = function (options) {
            return this.each(function (e) {
                //默认值
                var defaults = {
                    tab: ".tab",
                    tab_li: ".tab_head>li",
                    tab_content: ".tab_content>div",
                    tab_selected: "tab_selected",
                    tab_type: "hover"
                };
                var option = $.extend({}, defaults, options);
                //初始化 tab
                var _this = $(this);
                _this.find(option.tab_li).eq(0).addClass(option.tab_selected);
                _this.find(option.tab_content).eq(0).show();
                //对每个元素进行操作
                _this.on(option.tab_type, option.tab_li, function () {
                    var index = $(this).index();
                    _this.find(option.tab_li).eq(index).addClass(option.tab_selected).siblings().removeClass(option.tab_selected);
                    _this.find(option.tab_content).eq(index).show().siblings().hide();
                })
            });
        }
        // imageslide
    $.fn.imagesSlide = function (options) {
        return this.each(function (e) {
            //默认值
            var defaults = {
                slidebox: ".slide-box",
                img: ".slide-imgbox>li",
                stext: ".slide-text>li",
                colbox: ".slide-col",
                col: ".slide-col>li",
                actionType: "click",
                currentClass: "current",
                time: "4000",
                effect: "fade"
            };
            var options = $.extend(defaults, options);
            //初始化
            var _this = $(this);
            var len = _this.find(options.img).length;
            var picTimer;
            var index = 0;
            _this.find(options.colbox).html('');
            for (var i = 0; i < len; i++) {
                _this.find(options.colbox).append("<li></li>")
            };
            _this.find(options.col).eq(0).addClass(options.currentClass);
            _this.find(options.img).eq(0).show();
            _this.find(options.stext).eq(0).show();
            //
            $(options.slidebox).hover(function () {
                clearInterval(picTimer);
            }, function () {
                timer();
            }).trigger("mouseleave");
            $(options.colbox).on(options.actionType, "li", function () {
                clearInterval(picTimer);
                var index = $(this).index();
                play(index);
                timer();
            })

            function timer() {
                picTimer = setInterval(function () {
                    play(index);
                    index++;
                    if (index == len) {
                        index = 0;
                    }
                }, options.time);
            }

            function play(index) {
                _this.find(options.col).eq(index).addClass(options.currentClass).siblings().removeClass(options.currentClass);
                _this.find(options.img).eq(index).fadeIn(700).siblings().fadeOut(700);
                _this.find(options.stext).eq(index).fadeIn(700).siblings().fadeOut(700);
            }
        })
    }
})(jQuery);

//图片缩放
$.fn.imgAuto = function (maxWidth, maxHeight) {
    var $t = $(this);

    function DrawImg(obj, boxWidth, boxHeight) {
        var imgWidth = obj.width();
        var imgHeight = obj.height();
        //比较imgBox的长宽比与img的长宽比大小
        if ((boxWidth / boxHeight) >= (imgWidth / imgHeight)) {
            //重新设置img的width和height
            obj.width((boxHeight * imgWidth) / imgHeight);
            obj.height(boxHeight);
            //让图片居中显示
            //var margin=(boxWidth-obj.width())/2;
            //obj.css("margin-left",margin);
        } else {
            //重新设置img的width和height
            obj.width(boxWidth);
            obj.height((boxWidth * imgHeight) / imgWidth);
            //让图片居中显示
            var margin = (boxHeight - obj.height()) / 2;
            obj.css("margin-top", margin);
        }
    }
    DrawImg($t.find('img'), maxWidth, maxHeight);
};
//设为首页加入收藏
$.fn.tool = function (Hmpe, type, Favs) {
    var Address = location.href; //地址
    kdocTitle = $('title').html(); //标题
    if (kdocTitle == null) {
        var t_titles = $('title');
        if (t_titles && t_titles.length > 0) {
            kdocTitle = t_titles[0];
        } else {
            kdocTitle = "";
        }
    }
    if (Hmpe == "" || Hmpe == null) {
        Hmpe = '设为首页';
    }
    if (type == "" || type == null) {
        type = '';
    }
    if (Favs == "" || Favs == null) {
        Favs = '加入收藏';
    }

    function SetHome(url) {
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        } else {
            alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
    }
    var Homepage = "<a title='" + Hmpe + "' onclick=\"javascript:SetHome(" + Address + ")\">" + Hmpe + "</a>";
    var Favorites = "<a onclick=\"javascript:window.external.addFavorite('" + Address + "','" + kdocTitle + "')\" title='" + Favs + "'>" + Favs + "</a>";
    $(this).html(Favorites + type + Homepage);
};
//----------
/***
   @name Marquee-Slide
   @description 基于 jQuery 的多功能无缝滚动插件
   @url https://github.com/wange1228/marquee-slide
   @version 0.4.3
   @author 万戈
   @blog http://wange.im
***/
! function (a) {
    var b;
    b = function () {
        function b(b, c) {
            this.elements = {
                wrap: b,
                ul: b.children(),
                li: b.children().children()
            }, this.settings = a.extend({}, a.fn.marquee.defaults, c), this.cache = {
                allowMarquee: !0
            }
        }
        return b.prototype.init = function () {
            this.setStyle(), this.move(), this.bind()
        }, b.prototype.setStyle = function () {
            var a, b, c, d, e, f, g, h;
            switch (d = this.elements.li.outerWidth(!0), c = this.elements.li.outerHeight(!0), b = Math.max(parseInt(this.elements.li.css("margin-top"), 10), parseInt(this.elements.li.css("margin-bottom"), 10)), this.settings.type) {
                case "horizontal":
                    h = this.settings.showNum * d, g = c, f = 9999, e = "auto", a = "left", this.cache.stepW = this.settings.stepLen * d, this.cache.prevAnimateObj = {
                        left: -this.cache.stepW
                    }, this.cache.nextAnimateObj = {
                        left: 0
                    }, this.cache.leftOrTop = "left";
                    break;
                case "vertical":
                    h = d, g = this.settings.showNum * c - b, f = "auto", e = 9999, a = "none", this.cache.stepW = this.settings.stepLen * c - b, this.cache.prevAnimateObj = {
                        top: -this.cache.stepW
                    }, this.cache.nextAnimateObj = {
                        top: 0
                    }, this.cache.leftOrTop = "top"
            }
            this.elements.wrap.css({
                position: "relative",
                width: h,
                height: g,
                overflow: "hidden"
            }), this.elements.ul.css({
                position: "relative",
                width: f,
                height: e
            }), this.elements.li.css({
                "float": a
            })
        }, b.prototype.bind = function () {
            var a, b, c, d, e, f;
            f = this, null != (a = this.settings.prevElement) && a.click(function (a) {
                a.preventDefault(), f.prev()
            }), null != (b = this.settings.nextElement) && b.click(function (a) {
                a.preventDefault(), f.next()
            }), null != (c = this.settings.pauseElement) && c.click(function (a) {
                a.preventDefault(), f.pause()
            }), null != (d = this.settings.resumeElement) && d.click(function (a) {
                a.preventDefault(), f.resume()
            }), null != (e = this.elements.wrap) && e.hover(function () {
                f.pause()
            }, function () {
                f.resume()
            })
        }, b.prototype.move = function () {
            var a, b, c;
            if (c = this, this.settings.auto) {
                switch (this.settings.direction) {
                    case "forward":
                        b = c.prev;
                        break;
                    case "backward":
                        b = c.next
                }
                a = c.settings.interval, setTimeout(function () {
                    b.call(c), setTimeout(arguments.callee, a)
                }, a), this.cache.moveBefore = this.cache.moveAfter = function () {
                    return null
                }
            } else this.cache.moveBefore = function () {
                return c.cache.allowMarquee = !1
            }, this.cache.moveAfter = function () {
                return c.cache.allowMarquee = !0
            }
        }, b.prototype.prev = function () {
            var a, b, c;
            c = this, this.cache.allowMarquee && (this.cache.moveBefore.call(this), this.settings.prevBefore.call(this), b = this.elements.ul, a = b.children().slice(0, this.settings.stepLen), a.clone().appendTo(b), b.animate(this.cache.prevAnimateObj, this.settings.speed, function () {
                b.css(c.cache.leftOrTop, 0), a.remove(), c.cache.moveAfter.call(c), c.settings.prevAfter.call(c)
            }))
        }, b.prototype.next = function () {
            var a, b, c;
            c = this, this.cache.allowMarquee && (this.cache.moveBefore.call(this), this.settings.nextBefore.call(this), b = this.elements.ul, a = b.children().slice(-this.settings.stepLen), a.clone().prependTo(b), b.css(c.cache.leftOrTop, -this.cache.stepW).animate(this.cache.nextAnimateObj, this.settings.speed, function () {
                a.remove(), c.cache.moveAfter.call(c), c.settings.nextAfter.call(c)
            }))
        }, b.prototype.pause = function () {
            this.settings.pauseBefore.call(this), this.cache.allowMarquee = !1, this.settings.pauseAfter.call(this)
        }, b.prototype.resume = function () {
            this.settings.resumeBefore.call(this), this.cache.allowMarquee = !0, this.settings.resumeAfter.call(this)
        }, b
    }(), a.fn.marquee = function (c) {
        this.each(function () {
            var d;
            d = new b(a(this), c), d.init()
        })
    }, a.fn.marquee.defaults = {
        auto: !0,
        interval: 3e3,
        direction: "forward",
        speed: 500,
        showNum: 1,
        stepLen: 1,
        type: "horizontal",
        prevElement: null,
        prevBefore: function () {},
        prevAfter: function () {},
        nextElement: null,
        nextBefore: function () {},
        nextAfter: function () {},
        pauseElement: null,
        pauseBefore: function () {},
        pauseAfter: function () {},
        resumeElement: null,
        resumeBefore: function () {},
        resumeAfter: function () {}
    }
}(jQuery);
/***
   @name Unslider
   @description Unslider — 一个超小的 jQuery轮播（slider）插件
   @url http://www.bootcss.com/p/unslider/
   @version
***/
;
(function (e, t) {
    if (!e) return t;
    var n = function () {
        this.el = t;
        this.items = t;
        this.sizes = [];
        this.max = [0, 0];
        this.current = 0;
        this.interval = t;
        this.opts = {
            speed: 500,
            delay: 3e3,
            complete: t,
            keys: !t,
            dots: t,
            fluid: t
        };
        var n = this;
        this.init = function (t, n) {
            this.el = t;
            this.ul = t.children("ul");
            this.max = [t.outerWidth(), t.outerHeight()];
            this.items = this.ul.children("li").each(this.calculate);
            this.opts = e.extend(this.opts, n);
            this.setup();
            return this
        };
        this.calculate = function (t) {
            var r = e(this),
                i = r.outerWidth(),
                s = r.outerHeight();
            n.sizes[t] = [i, s];
            if (i > n.max[0]) n.max[0] = i;
            if (s > n.max[1]) n.max[1] = s
        };
        this.setup = function () {
            this.el.css({
                overflow: "hidden",
                width: n.max[0],
                height: this.items.first().outerHeight()
            });
            this.ul.css({
                width: this.items.length * 100 + "%",
                position: "relative"
            });
            this.items.css("width", 100 / this.items.length + "%");
            if (this.opts.delay !== t) {
                this.start();
                this.el.hover(this.stop, this.start)
            }
            this.opts.keys && e(document).keydown(this.keys);
            this.opts.dots && this.dots();
            if (this.opts.fluid) {
                var r = function () {
                    n.el.css("width", Math.min(Math.round(n.el.outerWidth() / n.el.parent().outerWidth() * 100), 100) + "%")
                };
                r();
                e(window).resize(r)
            }
            if (this.opts.arrows) {
                this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function () {
                    e.isFunction(n[this.className]) && n[this.className]()
                })
            }
            if (e.event.swipe) {
                this.el.on("swipeleft", n.prev).on("swiperight", n.next)
            }
        };
        this.move = function (t, r) {
            if (!this.items.eq(t).length) t = 0;
            if (t < 0) t = this.items.length - 1;
            var i = this.items.eq(t);
            var s = {
                height: i.outerHeight()
            };
            var o = r ? 5 : this.opts.speed;
            if (!this.ul.is(":animated")) {
                n.el.find(".dot:eq(" + t + ")").addClass("active").siblings().removeClass("active");
                this.el.animate(s, o) && this.ul.animate(e.extend({
                    left: "-" + t + "00%"
                }, s), o, function (i) {
                    n.current = t;
                    e.isFunction(n.opts.complete) && !r && n.opts.complete(n.el)
                })
            }
        };
        this.start = function () {
            n.interval = setInterval(function () {
                n.move(n.current + 1)
            }, n.opts.delay)
        };
        this.stop = function () {
            n.interval = clearInterval(n.interval);
            return n
        };
        this.keys = function (t) {
            var r = t.which;
            var i = {
                37: n.prev,
                39: n.next,
                27: n.stop
            };
            if (e.isFunction(i[r])) {
                i[r]()
            }
        };
        this.next = function () {
            return n.stop().move(n.current + 1)
        };
        this.prev = function () {
            return n.stop().move(n.current - 1)
        };
        this.dots = function () {
            var t = '<ol class="dots">';
            e.each(this.items, function (e) {
                t += '<li class="dot' + (e < 1 ? " active" : "") + '">' + (e + 1) + "</li>"
            });
            t += "</ol>";
            this.el.addClass("has-dots").append(t).find(".dot").click(function () {
                n.move(e(this).index())
            })
        }
    };
    e.fn.unslider = function (t) {
        var r = this.length;
        return this.each(function (i) {
            var s = e(this);
            var u = (new n).init(s, t);
            s.data("unslider" + (r > 1 ? "-" + (i + 1) : ""), u)
        })
    }
})(window.jQuery, false)
