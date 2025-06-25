let counter =0;


counter= Number(counter);

function increase(){
    counter++;
    document.getElementById("counter").textContent =counter;
}

function decrease(){
    counter--;
    document.getElementById("counter").textContent =counter;
}

function reset(){
    counter=0;
    document.getElementById("counter").textContent =counter;
}
