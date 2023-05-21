function renderTimePage(element, setClock) {
    fetch('./pages/time.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(res => {
            element.innerHTML = res;
            setClock('.time__main');
            setInterval(() => setClock('.time__main'), 1000);
        })
        .catch(() => {
            element.innerHTML = `<div class="w-50 m-auto">
                                    <img class="w-100 h-auto"src="./assets/img/error.png"/>
                                </div>`;
        });
}
