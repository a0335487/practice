
// Открыть список в footer
function openFooter(event){
    const parent = event.target.closest(".foot-col");
    if( window.innerWidth <= 767 ){
        parent.classList.toggle("show");
    }  
}



function showService(event, serviceType) {
    const serviceElements = document.querySelectorAll('.service-nav-child'); 
    serviceElements.forEach(function(element) {
        element.classList.remove('active');
    }); 

    // const selectedElement = document.getElementById(serviceType + '_but');
    const parent = event.target.closest(".service-nav-child");
    parent.classList.add('active');

    const serviceInfos = document.querySelectorAll('.service-info'); 
    serviceInfos.forEach(function(info) {
        info.style.display = 'none';
    });
    
    const selectedInfo = document.getElementById('service-info-' + serviceType);
    selectedInfo.style.display = 'block';

    const serviceImg = document.querySelector('.service-img');
    serviceImg.src = 'img/' + serviceType + '.svg';  
}



//скролл по якорным ссылкам
function getScroll(blockName) {
    let nav = document.getElementById(blockName);
    let links = nav.getElementsByTagName('a');  

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            let linkAttr = links[i].getAttribute('href').match(/[a-z]/gi);
            console.log(linkAttr);
            let linkStr = linkAttr.join('');
            console.log(linkStr);
            let div = document.getElementById(linkStr);
            let divId = div.getAttribute('id');

            if (linkStr == divId) {
                window.scroll({
                    top: div.getBoundingClientRect().top,
                    behavior: 'smooth'
                });
            }
        });
    }
}

getScroll('header_menu');
getScroll('services');







