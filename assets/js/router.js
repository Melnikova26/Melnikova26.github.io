const links = document.querySelectorAll('.header__nav-item');
getLink();
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

    if (hash === '#home') {
      renderHomePage(contentElement);
    } else if (hash === '#map') {
      renderMapPage(contentElement);
    } else if (hash === '#time') {
      renderTimePage(contentElement);
    } 
  }

  // Обработка события загрузки страницы
  window.addEventListener('DOMContentLoaded', () => {
    handleHashChange();
  });

  // Обработка события изменения хэша
  window.addEventListener('hashchange', () => {
    handleHashChange();
  });


// const locationHandler = async (event) => {
//     event.preventDefault();
// 	var location = window.location.hash.replace("#", "");
// 	if (location.length == 0) {
// 		location = "/";
// 	}
// 	const route = routes[location];
// 	const html = await fetch(route.template).then((response) => response.text());
// 	document.getElementById("content").innerHTML = html;
// 	document.title = route.title;
// 	// document
// 	// 	.querySelector('meta[name="description"]')
// 	// 	.setAttribute("content", route.description);
// };
// // create a function that watches the hash and calls the urlLocationHandler
// window.addEventListener("hashchange", locationHandler);
// // call the urlLocationHandler to load the page
// locationHandler();