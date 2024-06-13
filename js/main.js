
// Открыть список в footer
function openFooter(str){
    const footBlock = document.getElementById(str);
    const arrowFoot = document.querySelector('.' + str + ' .foot-arrow');
    if( window.innerWidth <= 767 ){
        if (footBlock.style.display !== "flex"){
        footBlock.style.display = "flex";
        arrowFoot.src = 'img/up.svg';
        }
        else{
        footBlock.style.display = "none";
        arrowFoot.src = 'img/down.svg';
        }
    } 
    else{
        footBlock.style.display = "flex";
    } 
}



function showService(serviceType) {
    const serviceElements = document.querySelectorAll('.service-nav-child'); 
    serviceElements.forEach(function(element) {
        element.classList.remove('active');
    }); 

    let selectedElement = document.getElementById(serviceType + '_but');
    selectedElement.classList.add('active');

    const serviceInfos = document.querySelectorAll('.service-info'); 
    serviceInfos.forEach(function(info) {
        info.style.display = 'none';
    });
    
    let selectedInfo = document.getElementById('service-info-' + serviceType);
    selectedInfo.style.display = 'block';

    let serviceImg = document.querySelector('.service-img');
    serviceImg.src = 'img/' + serviceType + '.svg';  
}


// function serviceBlock(serviceName, number, imgSrc) {
//     const serviceElements = document.querySelectorAll('.service-nav-child'); 
//     serviceElements.forEach(function(element) {
//         element.classList.remove('active');
//     });
    
//     let serviceTitle = document.querySelector('.service-info h3'); 
//     serviceTitle.textContent = serviceName; 
    
//     let selectedElement = document.querySelectorAll('.service-nav-child')[number - 1];
//     selectedElement.classList.add('active');

//     let serviceImg = document.querySelector('.service-img');
//     serviceImg.src = 'img/' + imgSrc;
// }


//скролл по якорным ссылкам
function getScroll(blockName) {
    let nav = document.getElementById(blockName);
    let links = nav.getElementsByTagName('a');  

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            let linkAttr = links[i].getAttribute('href').match(/[a-z]/gi);
            let linkStr = linkAttr.join('');
            let div = document.getElementById(linkStr);
            let divId = div.getAttribute('id');

            if (linkStr == divId) {
                window.scroll({
                    top: div.getBoundingClientRect().top - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

getScroll('header_menu');
getScroll('services');







