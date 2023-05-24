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
const linkElems = document.querySelectorAll('.header__nav-link');


linkElems.forEach((item, i) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const path = event.target.closest('.header__nav-link').getAttribute('href');
        history.pushState({}, '', path);
        updatePage(path);
        getLink(i);
    });
})

function getLink(i = 0){
    linkElems.forEach(item => item.classList.remove('header__nav-link_active'));
    linkElems[i].classList.add('header__nav-link_active');
}

function updatePage(path) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    switch(path){
        case '#map':
            getLink(1);
            renderMapPage(content, fetchPage);
            break;
        case '#time':
            getLink(2);
            renderTimePage(content, setClock, fetchPage);
            break;
        case '#main':
        default:
            getLink();
            renderMainPage(content, fetchPage);
    }
}


window.addEventListener('popstate', () => {
    const path = location.hash;
    updatePage(path);
});


// Time
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
    updatePage(location.hash);
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
