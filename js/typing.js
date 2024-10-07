const element = document.querySelector('.typing');

let text = undefined;

let index = 0;

let timer = undefined;

let defaultLang = undefined;

$(function () {
    if (!defaultLang) {
        defaultLang = 'en';
    }
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        rootPath: "/MyPage",
        //注意！要配置好语言文件的正确路径
        filePath: "/i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function() {
            console.log("i18n is ready.");
        }
    });
    autoTyping(element);
});

function autoTyping(e) {
    if (!text) {
        text = e.innerHTML;
    }else {
        /*切换为中文*/
        $(".chinese").click(function() {
            defaultLang = 'zh';
            $.getJSON('/MyPage/i18n/i18n_'+defaultLang+'.json', function(data) {
                const attr = element.getAttribute('i18n');
                text = data[attr];
                index = 0;
            });
            $("[i18n]").i18n({
                defaultLang: "zh",
                //注意！要配置好语言文件的正确路径
                filePath: "/i18n/"
            });
        });
        /*切换为英文*/
        $(".english").click(function() {
            defaultLang = 'en';
            $.getJSON('/MyPage/i18n/i18n_'+defaultLang+'.json', function(data) {
                const attr = element.getAttribute('i18n');
                text = data[attr];
                index = 0;
            });
            $("[i18n]").i18n({
                defaultLang: "en",
                //注意！要配置好语言文件的正确路径
                filePath: "/i18n/"
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