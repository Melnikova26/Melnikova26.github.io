
const links = document.querySelectorAll('.header__nav-item'),
      linkElems = document.querySelectorAll('.header__nav-link');

linkElems.forEach((item, i) => {
    if (item.href.slice(item.href.indexOf('#')) === location.hash){
        getLink(i);
        links[i].click();
    } else if (location.hash == ''){
        getLink();
    }
})

function getLink(i = 0){
    links.forEach(item => item.classList.remove('header__nav-item_active'));
    links[i].classList.add('header__nav-item_active');
}
links.forEach((item, i) => {
    item.addEventListener('click', () => getLink(i));
});
let startTime;
window.addEventListener('load', () => {
    if (!localStorage.getItem("startTime")) {
        startTime = new Date();
        localStorage.setItem("startTime", startTime);
    } else {
        startTime = new Date(localStorage.getItem("startTime"));
    }
});

function getTime(startTime) {
    const total = Date.parse(new Date()) - Date.parse(startTime);
    hours = Math.floor((+total / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((+total / (1000 * 60)) % 60),
    seconds = Math.floor((+total / 1000 % 60));
      
    return {
        'total': total,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}
function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function setClock(selector) {
    const timer = document.querySelector(selector);
    const t = getTime(startTime);
    if (!t){
        timer.innerHTML = `00:00:00`;
    } else {
        timer.innerHTML = `${getZero(t.hours)}:${getZero(t.minutes)}:${getZero(t.seconds)}`;
    }
}
window.addEventListener("beforeunload", function () {
    localStorage.removeItem("startTime");
});

function handleHashChange() {
    const hash = location.hash;
    const contentElement = document.getElementById('content');

    switch(hash){
        case '#home':
            renderHomePage(contentElement);
            break;
        case '#map':
            renderMapPage(contentElement);
            break;
        case '#time':
            renderTimePage(contentElement, setClock);
            break;
        default:
            renderHomePage(contentElement);
    }
}

handleHashChange();

window.addEventListener('hashchange', () => {
    handleHashChange();
});
