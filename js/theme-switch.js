const doc = document;

const themes = [
    doc.querySelector('link[data-theme="blue"]'),
    doc.querySelector('link[data-theme="green"]'),
    doc.querySelector('link[data-theme="pink"]'),
    doc.querySelector('link[data-theme="red"]'),
    doc.querySelector('link[data-theme="sea"]'),
    doc.querySelector('link[data-theme="violet"]'),
];

const btn_group = doc.querySelectorAll('.custom-btn');

btn_group.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const theme = btn.getAttribute('data-theme');
        this.switchTheme(theme);
    });
});

function switchTheme(theme) {
    themes.forEach(t => {
       t.disabled = t.dataset.theme !== theme;
    });
}