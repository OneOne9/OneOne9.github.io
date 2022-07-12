document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    iziToast.show({
        timeout: 1000,
        icon: "fa-solid fa-circle-exclamation",
        message: year + " " + month + " " + day
    });
    var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var weekday = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    $("#time").html(year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;" + day + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekdays[weekday] + "</span><br>" + "<span class='time-text'>" + hour + ":" + min + ":" + sec + "</span>");
    t = setTimeout(time, 1000);
}