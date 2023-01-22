let num = document.querySelector(".text");

//to decrease number
function decre() {
  num.innerHTML--;
  color();
}

//to increse number
function incre() {
  num.innerHTML++;
  color();
}

//to reset number
function reset() {
  num.innerHTML = 0;
  color();
}

//to color the number
function color() {
(num.innerHTML > 0) ? num.style.color = "green"
 : (num.innerHTML == 0) ? num.style.color = "black"
 : num.style.color = "red"
}
