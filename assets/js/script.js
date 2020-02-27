$(function(){
    var together = new Date();
    together.setFullYear(2019, 7, 13);
    together.setHours(0);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    var HTObj = {
        init:function(){
            var _this = this;
            this.addEvents();
            this.timeElapse(together);
            setInterval(function () {
                _this.timeElapse(together);
            }, 500);
        },

        addEvents:function(){
            $("#about_scroll").fadeOut();
            $("#work_scroll").fadeOut();
            $("#contact_scroll").fadeOut();

            $("#about").click(function(){
                $("#index").fadeOut();
                $("#about_scroll").fadeIn();
                $('#about_left').addClass('animated slideInLeft');
                $('#about_right').addClass('animated slideInRight');
            });
            $("#scanCode").click(function(){
                $(window).attr('location','https://open.weixin.qq.com/connect/app/qrconnect?appid=wx095ef8ef7e64b291&bundleid=com.tencent.smoba&scope=snsapi_base%2Csnsapi_userinfo%2Csnsapi_friend%2Csnsapi_message&state=weixin');
            });
            $("#contact").click(function(){
                $("#index").fadeOut();
                $("#contact_scroll").fadeIn();
                $('#contact_left').addClass('animated slideInLeft');
                $('#contact_right').addClass('animated slideInRight');
            });

            $(".back").click(function(){
                $(".pages").fadeOut();
                $("#index").fadeIn();
                $('#index_left').addClass('animated slideInLeft');
                $('#index_right').addClass('animated slideInRight');
            });
        },


        timeElapse:function (c) {
            var e = Date();
            var f = (Date.parse(e) - Date.parse(c)) / 1000;
            var g = Math.floor(f / (3600 * 24));
            f = f % (3600 * 24);
            var b = Math.floor(f / 3600);
            if (b < 10) {
                b = "0" + b
            }
            f = f % 3600;
            var d = Math.floor(f / 60);
            if (d < 10) {
                d = "0" + d
            }
            f = f % 60;
            if (f < 10) {
                f = "0" + f
            }
            var a = '&nbsp;<span class="digit"><strong>' + g + '</strong></span> 天 <span class="digit"><strong>' + b + '</strong></span> 小时 <span class="digit"><strong>' + d + '</strong></span> 分钟 <span class="digit"><strong>' + f + "</strong></span> 秒";
            $("#elapseClock").html(a)
        }
    }
    HTObj.init();
})

