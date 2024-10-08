/*默认语言*/
const defaultLang = "en";
/*默认路径*/
const defaultPath = "/i18n/";

let currentLang = undefined;

$(function() {
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        rootPath: "/MyPage",
        //注意！要配置好语言文件的正确路径
        filePath: defaultPath,
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function() {
            console.log("i18n is ready.");
        }
    });
    if (!currentLang) {
        currentLang = defaultLang;
    }
    /*切换为中文 - 按钮*/
    $(".chinese").click(function() {
        currentLang = 'zh';
        $("[i18n]").i18n({
            defaultLang: currentLang
        });
    });
    /*切换为英文 - 按钮*/
    $(".english").click(function() {
        currentLang = 'en';
        $("[i18n]").i18n({
            defaultLang: currentLang
        });
    });
});