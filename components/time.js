function setInfo(setClock) {
  setClock(".time__main");
  setInterval(() => setClock(".time__main"), 1000);
}

async function renderTimePage(element, setClock, fetchPage) {
  await fetchPage("/pages/time.html", element);
  setInfo(setClock);
}
