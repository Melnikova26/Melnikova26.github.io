
const loading = document.querySelector('.spinner-border');
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
