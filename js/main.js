
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


function ServiceBlock(serviceName, number, imgSrc) {
    var elements = document.querySelectorAll('.service-nav-child'); 
    elements.forEach(function(element) {
        element.classList.remove('active');
    });
    
    var h2 = document.querySelector('h3'); 
    h2.textContent = serviceName; 
    
    var selectedElement = document.querySelectorAll('.service-nav-child')[number - 1];
    selectedElement.classList.add('active');

    var serviceImg = document.querySelector('.service-img');
    serviceImg.src = 'img/' + imgSrc;
}


//скролл по якорным ссылкам
function getScroll() {
    function animate(draw, duration) {
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
            var timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }
            draw(timePassed);
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        });
    }
    let nav = document.getElementById('header_menu'),
    links = nav.getElementsByTagName('a');  
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            // Отменяем стандартные действия браузера
            event.preventDefault();
            let link = links[i],
                linkAttr = link.getAttribute('href');
            linkAttr = linkAttr.match(/[a-z]/gi);
            let linkStr = linkAttr.join(''),
                div = document.getElementById(linkStr),
                divId = div.getAttribute('id');
            if (linkStr == divId) {
                // let divIdY = div.getBoundingClientRect().top;
                // window.scrollBy(0, divIdY / 20 -3);
                animate(function(timePassed) {
                    let divIdY = div.getBoundingClientRect().top - 80;
                    window.scrollBy(0, divIdY / 15);
                }, 1500);
            }
        });
    };
}
getScroll();







