// function renderTimePage(element, setClock) {
//     fetch('./pages/time.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Page not found');
//             }
//             return response.text();
//         })
//         .then(res => {
//             element.innerHTML = res;
//             setClock('.time__main');
//             setInterval(() => setClock('.time__main'), 1000);
//         })
//         .catch(() => {
//             element.innerHTML = `<div class="w-50 m-auto">
//                                     <img class="w-100 h-auto"src="./assets/img/error.png"/>
//                                 </div>`;
//         });
// }
// function initMap() {
//     const loading = document.querySelector('.spinner-border');
//     const center = [55.74610820643666,37.63562416176467];
    
//     function init() {
//         const map = new ymaps.Map('map', {
//             center: center,
//             zoom: 16
//         });
//         const placemark = new ymaps.Placemark(center  ,{},{
//             iconLayout: 'default#image',
//             iconImageHref: './assets/icons/location.svg',
//             iconImageSize: [40, 40],
//             iconImageOffset: [-15, -39]
//         });
//         map.geoObjects.add(placemark);
//         map.controls.remove('trafficControl');
//         loading.style.visibility = 'hidden';
//     }

//     ymaps.ready(init);
// }
function setInfo(setClock) {
    setClock('.time__main');
    setInterval(() => setClock('.time__main'), 1000);
}
    
async function renderTimePage(element, setClock, fetchPage) {
    await fetchPage('./pages/time.html', element);
    setInfo(setClock);
}
