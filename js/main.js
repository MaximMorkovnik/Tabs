const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const tabs3 = document.getElementById('tabs3');
const content3 = document.querySelectorAll('.content3');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

const changeClass3 = el => {
    for (let i = 0; i < tabs3.children.length; i++) {
        tabs3.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs3.addEventListener('click', e => {
    const currTab3 = e.target.dataset.btn3;
    changeClass3(e.target);
    for (let i = 0; i < content3.length; i++) {
        content3[i].classList.remove('active');
        if (content3[i].dataset.content3 === currTab3) {
            content3[i].classList.add('active');
        }
    }
})