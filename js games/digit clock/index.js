


function updateTime(){
    
    let now = new Date();
    let hours = now.getHours();
    rem = hours > 12 ? `PM`:`AM`;
    hours = hours > 12 ? hours -12 : hours;
    hours = hours.toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    let time =`${hours}:${min}:${sec} ${rem}`;
    document.getElementById("clock-con").textContent = time;
    
};


updateTime();
setInterval(updateTime, 1000);