function getHeight() {
    const toggleButton = document.querySelectorAll('.content__time + .content__icon'),
        icon = document.querySelectorAll('.content__time + .content__icon img'),
        contentContainer = document.querySelectorAll('.content__about');
            
    function getOpen(num = 0){
        if(!contentContainer[num].style.maxHeight){
            contentContainer[num].style.maxHeight = contentContainer[num].scrollHeight + 'px';
            icon[num].classList.toggle('rotate');
        } else {
            contentContainer[num].style.maxHeight = null;
            icon[num].classList.toggle('rotate');
        }
    }
    setTimeout(getOpen, 500);

    toggleButton.forEach((item, i) => {
        item.addEventListener('click', () => getOpen(i));
    });
}
    
async function renderHomePage(element, fetchPage) {
    await fetchPage('./pages/index.html', element);
    getHeight();
} 

