const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${(mm)}deg)`;
sc.style.transform = `rotateZ(${(ss)}deg)`;

});


const body = document.querySelector('body');
const mm = document.getElementById('mn');
const ss = document.getElementById('sc');
const toggle = document.getElementById('toggle');
toggle.onclick = function() {
toggle.classList.toggle('active');
body.classList.toggle('active');
mm.classList.toggle('active');
ss.classList.toggle('active');
}

