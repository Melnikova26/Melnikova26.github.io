async function fetchPage(url, element) {
    return await fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Page not found');
                        }
                        return response.text();
                    })
                    .then(res => {
                        element.innerHTML = res;
                    })
                    .catch(() => {
                        element.innerHTML = `<div class="w-50 m-auto">
                                                <img class="w-100 h-auto"src="./assets/img/error.png"/>
                                            </div>`;
                    });
}
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

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
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

function setClock(selector) {
    const timer = document.querySelector(selector);
    const t = getTime(startTime);
    if (!t){
        timer.innerHTML = `00:00:00`;
    } else {
        timer.innerHTML = `${getZero(t.hours)}:${getZero(t.minutes)}:${getZero(t.seconds)}`;
    }
}
window.addEventListener('load', () => {
    if (!localStorage.getItem("startTime")) {
        startTime = new Date();
        localStorage.setItem("startTime", startTime);
    } else {
        startTime = new Date(localStorage.getItem("startTime"));
    }
});
window.addEventListener("beforeunload", function () {
    localStorage.removeItem("startTime");
});

function handleHashChange() {
    const hash = location.hash;
    const contentElement = document.getElementById('content');

    switch(hash){
        case '#map':
            renderMapPage(contentElement, fetchPage);
            break;
        case '#time':
            renderTimePage(contentElement, setClock, fetchPage);
            break;
        case '#home':
        default:
            renderHomePage(contentElement, fetchPage);
    }
}

handleHashChange();

window.addEventListener('hashchange', () => {
    handleHashChange();
});
