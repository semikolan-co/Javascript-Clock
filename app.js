setInterval(Realtime,1000);

function Realtime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    ampm = "AM";

    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
        
    }

    if(hours == 0){
        hours = 12;
        ampm = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds + ampm;

    document.getElementById("clock").innerHTML  = currentTime;
    

}

Realtime();