function renderTimePage(element, setClock) {
    fetch('./pages/time.html')
        .then(response => response.text())
        .then(res => {
            element.innerHTML = res;
            setClock('.time__main');
            setInterval(() => setClock('.time__main'), 1000);
        });
}
