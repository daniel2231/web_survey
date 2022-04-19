// Code goes here
function resetSavedTime() {
  // if there is no endTime in localstorage
  if (!localStorage.getItem("endTime")) {
    endTime = +new Date();
    window.localStorage.setItem("endTime", endTime);
    return endTime;
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  // get timestamp

  function countdown(elementName, minutes, seconds) {
    let element, hours, mins, msLeft, time;

    function twoDigits(n) {
      return n <= 9 ? "0" + n : n;
    }

    function updateTimer() {
      msLeft = endTime - +new Date();

      if (msLeft < 1000) {
        element.innerHTML = "시간 초과";
      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        element.innerHTML =
          "⏰ &nbsp;" +
          (hours ? hours + ":" + twoDigits(mins) : mins) +
          ":" +
          twoDigits(time.getUTCSeconds());
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
      }
    }
    resetSavedTime();

    element = document.querySelector(elementName);
    endTime =
      +new Date(parseInt(window.localStorage.getItem("endTime"))) +
      1000 * (60 * minutes + seconds) +
      500;
    console.log(endTime);

    updateTimer();
  }

  countdown(".timer", 10, 0);
});
