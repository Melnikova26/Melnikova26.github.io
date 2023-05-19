function renderMapPage(element) {
    element.innerHTML = `
    <div class="wrapper">
        <div class="map w-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>Basic map</div>
                <div class="d-flex align-items-center">
                    <div class="me-2 btn p-0">
                        <img src="./assets/icons/arrow-down.svg" alt="Arrow">
                    </div>
                    <div class="me-2 btn p-0">
                        <img src="./assets/icons/update.svg" alt="Update">
                    </div>
                    <div class="btn p-0">
                        <img src="./assets/icons/close.svg" alt="Close">
                    </div>
                </div>
            </div>
            <div id="map" class="w-100 d-flex justify-content-center align-items-center map__main" style="height: 480px">
                <div class="spinner-border"></div>
            </div>
        </div>
    </div>
    `;
    const loading = document.querySelector('.spinner-border');
    console.log(loading);
    const center = [55.74610820643666,37.63562416176467];

    function init() {
        const map = new ymaps.Map('map', {
            center: center,
            zoom: 16
        });
        const placemark = new ymaps.Placemark(center  ,{},{
            iconLayout: 'default#image',
            iconImageHref: './assets/icons/location.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-15, -39]
        });
        map.geoObjects.add(placemark);
        map.controls.remove('trafficControl');
        loading.style.visibility = 'hidden';
    }

    ymaps.ready(init);
}
