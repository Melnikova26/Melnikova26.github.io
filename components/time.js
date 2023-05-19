function renderTimePage(element) {
    element.innerHTML = `
    <div class="wrapper">
        <div class="time w-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>Timer</div>
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
            <div class="time__main">00:00:00</div>
        </div>
    </div>
    `;
    
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
    const timer = setInterval(updateTimer, 1000);
    window.addEventListener('beforeunload', () => {
        resetTimer();
        clearInterval(timer);
    });

}
