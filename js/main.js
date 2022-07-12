alert("Hello");

document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

var time = document.getElementById("time")
time.addEventListener('click', function() {
    iziToast.show({
        timeout: 1000,
        icon: "fa-solid fa-circle-exclamation",
        message: '已经为你显示时间qwq'
    });
})