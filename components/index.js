function renderHomePage(element) {
    fetch('./pages/index.html')
        .then(response => response.text())
        .then(res => {
            element.innerHTML = res;

            const toggleButton = document.querySelectorAll('.content__time + .content__icon'),
                    icon = document.querySelectorAll('.content__time + .content__icon img');
                    contentContainer = document.querySelectorAll('.content__about');
            setTimeout(getOpen, 500);
            
            function getOpen(num = 0){
                if(!contentContainer[num].style.maxHeight){
                    contentContainer[num].style.maxHeight = contentContainer[num].scrollHeight + 'px';
                    icon[num].classList.toggle('rotate');
                } else {
                    contentContainer[num].style.maxHeight = null;
                    icon[num].classList.toggle('rotate');
                }
            }

            toggleButton.forEach((item, i) => {
                item.addEventListener('click', () => getOpen(i));
            });
        });  
}    

