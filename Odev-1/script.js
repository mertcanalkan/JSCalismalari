window.onload = getTime;

let name = prompt("Adınızı giriniz");

let text = document.querySelector("#myName").innerHTML=`${name}`;

function getTime(){
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getUTCDay();
   
    switch(day){
        case 1:
            day ="Pazartesi";
            break;
        case 2:
            day ="Salı";
            break;
        case 3:
            day ="Çarşamba";
            break;
        case 4:
            day ="Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }
    
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('myClock').innerHTML = `${hour}:${minute}:${second} ${day}`;
    t = setTimeout('getTime()',1000);
}



function checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

