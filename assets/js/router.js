import { setClock } from "./timer.js";
async function fetchPage(url, element) {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((res) => {
      element.innerHTML = res;
    })
    .catch(() => {
      element.innerHTML = `<div class="w-50 m-auto">
                                                <img class="w-100 h-auto"src="./assets/img/error.png"/>
                                            </div>`;
    });
}
const linkElems = document.querySelectorAll(".header__nav-link");

linkElems.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const path = event.target.closest(".header__nav-link").getAttribute("href");
    history.pushState({}, "", path);
    updatePage(path);
    getLink(i);
  });
});

function getLink(i = 0) {
  linkElems.forEach((item) => item.classList.remove("header__nav-link_active"));
  linkElems[i]?.classList.add("header__nav-link_active");
}

function updatePage(path) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  switch (path) {
    case "/map.html":
      getLink(1);
      renderMapPage(content, fetchPage);
      break;
    case "/time.html":
      getLink(2);
      renderTimePage(content, setClock, fetchPage);
      break;
    case "/main.html":
    default:
      getLink();
      renderMainPage(content, fetchPage);
  }
}

window.addEventListener("popstate", () => {
  updatePage(location.pathname);
});
window.addEventListener("load", () => {
  updatePage(location.pathname);
});
