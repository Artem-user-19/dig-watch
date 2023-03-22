function startTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById(`numb`).innerHTML = h + ":" + m + ":" + s
    setTimeout(startTime, 1000 )
}

function checkTime(i){
    if(i < 10) {i = "0" + i}
    return i
}
var currentTime = new Date();
currentTime.getHours();
var currentHour = currentTime.getHours();
switch (true) {
case (currentHour > 4 && currentHour < 12):
document.getElementById(`day`).innerHTML = "Добрий ранок!"
break;
case (currentHour > 12 && currentHour < 17):
document.getElementById(`day`).innerHTML = "Добрий день!"
break;
case (currentTime > 18 && currentHour < 22  ):
document.getElementById(`day`).innerHTML = "Добрий вечір!"
break;
default:
document.getElementById(`day`).innerHTML = "Доброї ночі"
break;
}

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
month = checkTime(month)
day = checkTime(day)

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
document.getElementById('date').innerHTML = currentDate