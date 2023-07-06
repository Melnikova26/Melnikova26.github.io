let startTime;

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
export function getTime(startTime) {
  const total = Date.parse(new Date()) - Date.parse(startTime),
    hours = Math.floor((+total / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((+total / (1000 * 60)) % 60),
    seconds = Math.floor((+total / 1000) % 60);

  return {
    total: total,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export function setClock(selector) {
  const timer = document.querySelector(selector);
  const t = getTime(startTime);
  if (!timer) return;
  !t
    ? (timer.innerHTML = `00:00:00`)
    : (timer.innerHTML = `${getZero(t.hours)}:${getZero(t.minutes)}:${getZero(
        t.seconds,
      )}`);
}

window.addEventListener("load", () => {
  if (!localStorage.getItem("startTime")) {
    startTime = new Date();
    localStorage.setItem("startTime", startTime);
  } else {
    startTime = new Date(localStorage.getItem("startTime"));
  }
});

window.addEventListener("beforeunload", function () {
  localStorage.removeItem("startTime");
});
