
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

    const serviceInfos = document.querySelectorAll('.service-main'); 
    serviceInfos.forEach(function(info) {
        info.style.display = 'none';
    });
    
    const selectedInfo = document.getElementById('service-info-' + serviceType);
    selectedInfo.style.display = 'block';
 
}



//скролл по якорным ссылкам
const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const idSection = smoothLink.getAttribute("href");

        document.querySelector(idSection).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};






