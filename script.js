var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");
var para1 = document.querySelector(".first");
var para2 = document.querySelector(".second");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomColor() {
	let values = "0123456789ABCDEF";
	let hex1 = "#";
	let hex2 = "#";

	for (let i = 0; i < 6; i++) 
    hex1 += values[(Math.floor(Math.random() * 16))]; 
	for (let i = 0; i < 6; i++) 
    hex2 += values[(Math.floor(Math.random() * 16))];
  
  	para1.textContent = hex1
  	para2.textContent = hex2
}

button.addEventListener("click", randomColor);