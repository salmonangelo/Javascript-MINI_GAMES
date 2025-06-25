const text = document.getElementById("text");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

let temp;

function convert() {
  if (celsius.checked) {
     temp = Number(text.value);
     temp = temp * 9/5 +32;
     result.textContent = temp + "F";
   }
   else if (fahrenheit.checked) {
    temp = Number(text.value);
    temp = (temp-32) * (5/9);
    result.textContent = temp + "C";
  }
   else {
    result.textContent = "Please select a unit";
  }
}
