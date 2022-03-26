// start of about

let number = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop){
        if(!started){
            number.forEach((number) => StartCount(number));
        }
        started = true;
    }
}

function StartCount(ele) {
    let gole = ele.dataset.gole;
    let count = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == gole){
        clearInterval(count);
    }
    },2000 / gole);
}

// end of about

// start of skils

let skils = document.querySelector(".our-skils");
let prog = document.querySelectorAll(".our-skils .skils .prog-holder .prog span");

window.onscroll = function () {
    if (window.scrollY >= skils.offsetTop - 100) {
        prog.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        })
    }
}


// end of skils