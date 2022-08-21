function time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds()
    let session = document.getElementById("session");

    if (hour >= 12) {
        session.innerHTML = "PM"
    }
    if (hour > 12) {
        hour = hour - 12
    }
    if (hour == 0) {
        hour = 00
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }

    document.getElementById('hours').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;


}
setInterval(time, 10);
let date = new Date();
let day = date.getDay();
switch (day) {
    case 0:
        document.getElementById("day").innerText = "SUNDAY"
        break;
    case 1:
        document.getElementById("day").innerText = "MONDAY"
        break;
    case 2:
        document.getElementById("day").innerText = "TUESDAY"
        break;
    case 3:
        document.getElementById("day").innerText = "WEDNESDAY"
        break;
    case 4:
        document.getElementById("day").innerText = "THURSDAY"
        break;
    case 5:
        document.getElementById("day").innerText = "FRIDAY"
        break;
    case 6:
        document.getElementById("day").innerText = "SATURDAY"
        break;


}
