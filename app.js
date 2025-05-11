let sliderLine = document.querySelector(".slider-line");
let images = document.querySelectorAll(".slider-line img");
let current = 0;
let width;

function init() {
    images = document.querySelectorAll(".slider-line img");
    images.forEach((img)=> {   
        img.style.width =  `${width}px`
    }) 
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = `${width * images.length}px`;
    images.forEach((img) => (img.style.width = `${width}px`));
    roll();
}

window.addEventListener("resize", () => {
    init();
});

init();

let prev = document.querySelector("#btn-prev");
let next = document.querySelector("#btn-next");

prev.addEventListener("click", getPrevSlide);
next.addEventListener("click", getNextSlide);

function getPrevSlide() {
    current--;
    if (current < 0) {
        current = images.length - 1;
    }
    roll();
}

function getNextSlide() {
    current++;
    if (current >= images.length) {
        current = 0;
    }
    roll();
}

function roll() {
    sliderLine.style.transform = `translateX(-${width * current}px)`;
}

// Auto-slide functionality
let autoSlide = setInterval(getNextSlide, 3000);

document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(autoSlide);
});

document.querySelector(".slider").addEventListener("mouseout", () => {
    autoSlide = setInterval(getNextSlide, 3000);
});