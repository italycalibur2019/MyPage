const element = document.querySelector('.typing');

let text = undefined;

let index = 0;

let timer = undefined;

$(function () {
    autoTyping(element);
});

function autoTyping(e) {
    if (!text) {
        text = e.innerHTML;
    }
    if (index <= text.length) {
        e.innerHTML = text.slice(0, index++) + "_";
        if (!timer) {
            timer = setInterval(() => {autoTyping(element)}, 300);
        }
    }else {
        e.innerHTML = text;
        if (currentLang === 'en') {
            text = 'Welcome to my homepage';
        }else if (currentLang === 'zh') {
            text = '欢迎访问我的主页';
        }
        index = 0;
    }
}