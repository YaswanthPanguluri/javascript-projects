// Returns a random integer from 1 to 6:
var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;

var p1 = "./images/"+"dice"+r1+".png";
var p2 = "./images/"+"dice"+r2+".png";

document.querySelector(".img1").setAttribute("src",p1);
document.querySelector(".img2").setAttribute("src",p2);