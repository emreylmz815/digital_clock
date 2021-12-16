
function startTime() {
    const today = new Date();
    let h =today.getHours();
    let m =today.getMinutes();
    let s = today.getSeconds()
    m= checkTime(m);
    s= checkTime(s);
 
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s ;    
    setTimeout(startTime,100);
}
function date() {
    const days=new Date();
    let d =days.getDate();
    let month=days.getUTCMonth()+1;//getMonth() returns the month (from 0 to 11) of a date:
    let y = days.getUTCFullYear();
    document.getElementById("date").innerHTML=  d + ":"+month+":"+y;
    
}

function checkTime(i) 
{if (i<10) {i="0"+i};
return i;
    
}
