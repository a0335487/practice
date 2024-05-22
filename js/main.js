const El = document.getElementById('active-nav');
function Nav1(){
    El.style.left = "6px";
}
function Nav2(){
    let i = 6;
    let interval = setInterval(() => {
        El.style.left = i + "px";
        i += 4;
        if(i >= 347){
            clearInterval(interval);
        }
    }, 1)
}
function Nav3(){
    El.style.left = "50%";
}
function Nav4(){
    El.style.left = "75%";
}