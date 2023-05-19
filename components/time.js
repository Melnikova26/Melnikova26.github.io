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
            <div class="time__main">00:00:05</div>
        </div>
    </div>
    `;
}
