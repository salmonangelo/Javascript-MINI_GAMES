//just for fun

let box = document.getElementById("myBox");

document.addEventListener("keydown",event =>{
    box.textContent = "bye.";
    box.style.backgroundColor = "tomato";
});

document.addEventListener("keyup",event =>{
    box.textContent = "hello.";
    box.style.backgroundColor = "lightblue";
});