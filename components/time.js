function renderTimePage(element) {
    fetch('./pages/time.html')
        .then(response => response.text())
        .then(res => {
            element.innerHTML = res;
            
            function updateTimer() {
                let time = localStorage.getItem('siteTimer');
                
                if (time) {
                    time = parseInt(time, 10) + 1;
                } else {
                    time = 0;
                }

                localStorage.setItem('siteTimer', time.toString());

                const timerElement = document.querySelector('.time__main');
                timerElement.textContent = formatTime(time);
            }
            function formatTime(time) {
                const hours = Math.floor(time / 3600);
                const minutes = Math.floor((time % 3600) / 60);
                const seconds = time % 60;
                
                return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
            }
            
            function addZero (num){
                return +num < 10 ? `0${num}` : num;
            } 
            const resetTimer = () => localStorage.removeItem('siteTimer');
            
            window.addEventListener('beforeunload', () => {
                resetTimer();
                clearInterval(timer);
            });
            const timer = setInterval(updateTimer, 1000);
        });
}
