// Dark Mode

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';
}else{
themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';
}

});

// Mobile Menu

const menuBtn =
document.getElementById("menu-btn");

const navbar =
document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

// Typing Effect

const words = [
"Frontend Developer",
"UI Designer",
"Web Developer",
"Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.querySelector(".typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

setTimeout(typeEffect,300);

}

}

document.addEventListener(
"DOMContentLoaded",
()=>{
setTimeout(typeEffect,500);
}
);

// Counter Animation

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText =
target;

}

};

updateCounter();

});

// Scroll Progress Bar

window.addEventListener(
"scroll",
()=>{

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / height) * 100;

document.getElementById(
"progress-bar"
).style.width =
progress + "%";

}
);

// Close Menu After Click

document.querySelectorAll(
".navbar a"
).forEach(link=>{

link.addEventListener(
"click",
()=>{

navbar.classList.remove(
"active"
);

});

});
