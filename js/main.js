const El = document.getElementById('active-nav');
const parent = document.getElementById('service-nav').offsetWidth;

function moveNav(x, stop) {
    if (x < stop) {
        let i = x;
        let interval = setInterval(() => {
            El.style.left = i + "px";
            i += 4;
            if (i >= stop) {
                clearInterval(interval);
            }
        }, 1);
    } else {
        let j = x;
        let interval = setInterval(() => {
            El.style.left = j + "px";
            j -= 4;
            if (j <= stop) {
                clearInterval(interval);
            }
        }, 1);
    }
}


const serviceTitle = document.getElementById('service-title');
const serviceDesc = document.getElementById('service-description');
const serviceImg = document.getElementById('service-img');

function Nav1() {
    serviceTitle.innerHTML = "Бизнес-анализ";
    serviceImg.src = "img/service1.svg";
    let x = El.offsetLeft;
    moveNav(x, 4);
}

function Nav2() {
    serviceTitle.innerHTML = "Backend";
    serviceImg.src = "img/service2.svg";
    let stop = (parent / 4) + 4;
    let x = El.offsetLeft;
    moveNav(x, stop);
}

function Nav3() {
    serviceTitle.innerHTML = "Frontend";
    serviceImg.src = "img/service3.svg";
    let stop = (parent / 2) + 4;
    let x = El.offsetLeft;
    moveNav(x, stop);
}

function Nav4() {
    serviceTitle.innerHTML = "Mobile";
    serviceImg.src = "img/service4.svg";
    let stop = parent - (parent / 4) - 4;
    let x = El.offsetLeft;
    moveNav(x, stop);
}

// Открыть список в footer
function OpenFooter(str){
    const foot_block = document.getElementById(str);
    if (foot_block.style.display !== "flex"){
        foot_block.style.display = "flex";
    }
    else{
        foot_block.style.display = "none";
    }
    
}

