//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});

/* 鼠标样式 */
/*
const body = document.querySelector("body");
const element = document.getElementById("g-pointer-1");
const element2 = document.getElementById("g-pointer-2");
const halfAlementWidth = element.offsetWidth / 2;
const halfAlementWidth2 = element2.offsetWidth / 2;

function setPosition(x, y) {
    element2.style.transform = `translate(${x - halfAlementWidth2 + 1}px, ${y - halfAlementWidth2 + 1}px)`;
}

body.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        setPosition(e.clientX, e.clientY);
    });
});
*/
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//欢迎

now = new Date();
hour = now.getHours();
var hello = "你好";
if (hour < 6) {
    hello = "凌晨好";
} else if (hour < 9) {
    hello = "早上好";
} else if (hour < 12) {
    hello = "上午好";
} else if (hour < 14) {
    hello = "中午好";
} else if (hour < 17) {
    hello = "下午好";
} else if (hour < 19) {
    hello = "傍晚好";
} else if (hour < 22) {
    hello = "晚上好";
} else {
    hello = "夜深了";
}

iziToast.show({
    timeout: 2500,
    icon: false,
    title: hello,
    message: '欢迎来到我的主页'
});

/*
//获取天气
const add_id = "rlwppslhlxgyrtqp"; // app_id ROLL API
const app_secret = "cFBoWU9zQlNERUoxd2QxamJpVkZFZz09"; // app_secret ROLL API
const key = "d6e41a71f4eb49f39c5b1aeb142dec52" // key 和风天气

function getWeather() {
    fetch("https://www.mxnzp.com/api/ip/self?app_id=" + add_id + "&app_secret=" + app_secret)
        .then(response => response.json())
        .then(data => {
            let str = data.data.city
            let city = str.replace(/市/g, '')
            $('#city_text').html(city);
            fetch("https://geoapi.qweather.com/v2/city/lookup?location=" + city + "&number=1&key=" + key)
                .then(response => response.json())
                .then(location => {
                    let id = location.location[0].id
                    fetch("https://devapi.qweather.com/v7/weather/now?location=" + id + "&key=" + key)
                        .then(response => response.json())
                        .then(weather => {
                            $('#wea_text').html(weather.now.text)
                            $('#tem_text').html(weather.now.temp)
                            $('#win_text').html(weather.now.windDir)
                            $('#win_speed').html(weather.now.windScale)
                        })
                })
            
        })
        .catch(console.error);
}

getWeather();
//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    let date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var weekday = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    $("#time").html(year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;" + day + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekdays[weekday] + "</span><br>" + "<span class='time-text'>" + hour + ":" + min + ":" + sec + "</span>");
    t = setTimeout(time, 1000);
}
*/