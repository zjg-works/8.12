var htmls = document.documentElement;
var timer = null;
htmls.style.fontSize = htmls.clientWidth / 10 + "px";
window.onresize = function () {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timer = setTimeout(function () {
        htmls.style.fontSize = htmls.clientWidth / 10 + "px";
    }, 200);
}