const $ = document;
let hour = $.getElementById("hour");
let minute = $.getElementById("minute");
let second = $.getElementById("second");


function clock() {
    setInterval(()=> {
        const date = new Date;
        hour.innerHTML = date.getHours().toString().padStart(2,"0");
        minute.innerHTML = date.getMinutes().toString().padStart(2,"0");
        second.innerHTML = date.getSeconds().toString().padStart(2,"0");
    },1000)
}

window.addEventListener("DOMContentLoaded", clock)