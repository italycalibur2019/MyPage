const element = document.querySelector('.typing');

let text = undefined;

let index = 0;

let timer = undefined;

let lang = undefined;

$(function () {
    autoTyping(element);
});

function autoTyping(e) {
    if (!lang) {
        lang = 'en';
    }
    if (!text) {
        text = e.innerHTML;
    }else {
        /*切换为中文*/
        $(".chinese").click(function() {
            lang = 'zh';
            $.getJSON('/i18n/i18n_'+lang+'.json', function(data) {
                const attr = element.getAttribute('i18n');
                text = data[attr];
                index = 0;
            });
        });
        /*切换为英文*/
        $(".english").click(function() {
            lang = 'en';
            $.getJSON('/i18n/i18n_'+lang+'.json', function(data) {
                const attr = element.getAttribute('i18n');
                text = data[attr];
                index = 0;
            });
        });
    }
    if (index <= text.length) {
        e.innerHTML = text.slice(0, index++) + "_";
        if (!timer) {
            timer = setInterval(() => {autoTyping(element)}, 300);
        }
    }else {
        e.innerHTML = text;
        index = 0;
    }
}