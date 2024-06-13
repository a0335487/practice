
// Открыть список в footer
function openFooter(str){
    const footBlock = document.getElementById(str);
    if( window.innerWidth <= 767 ){
        if (footBlock.style.display !== "flex"){
        footBlock.style.display = "flex";
        }
        else{
        footBlock.style.display = "none";
        }
    } 
    else{
        footBlock.style.display = "flex";
    } 
}


function serviceBlock(serviceName, number, imgSrc) {
    const serviceElements = document.querySelectorAll('.service-nav-child'); 
    serviceElements.forEach(function(element) {
        element.classList.remove('active');
    });
    
    let serviceTitle = document.querySelector('h3'); 
    serviceTitle.textContent = serviceName; 
    
    let selectedElement = document.querySelectorAll('.service-nav-child')[number - 1];
    selectedElement.classList.add('active');

    let serviceImg = document.querySelector('.service-img');
    serviceImg.src = 'img/' + imgSrc;
}


//скролл по якорным ссылкам
function getScroll(blockName) {
    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
            let timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }
            draw(timePassed);
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        });
    }
    let nav = document.getElementById(blockName),
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
getScroll('header_menu');
getScroll('services');







