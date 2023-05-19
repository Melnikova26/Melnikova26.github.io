const links = document.querySelectorAll('.header__nav-item'),
      linkElems = document.querySelectorAll('.header__nav-link');

linkElems.forEach((item, i) => {
    if (item.href.slice(item.href.indexOf('#')) === location.hash){
        getLink(i);
        links[i].click();
    }
})

function getLink(i = 0){
    links.forEach(item => item.classList.remove('header__nav-item_active'));
    links[i].classList.add('header__nav-item_active');
}
links.forEach((item, i) => {
    item.addEventListener('click', () => getLink(i));
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
            renderTimePage(contentElement);
            break;
        default:
            renderHomePage(contentElement);
    }
}

handleHashChange();

window.addEventListener('hashchange', () => {
    handleHashChange();
});
