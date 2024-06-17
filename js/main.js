
// Открыть список в footer
function openFooter(event){
    const parent = event.target.closest(".foot-col");
    if( window.innerWidth <= 767 ){
        parent.classList.toggle("show");
    }  
}



// function showService(event, serviceType) {
//     const serviceElements = document.querySelectorAll('.service-nav-child'); 
//     serviceElements.forEach(function(element) {
//         element.classList.remove('active');
//     }); 

//     // const selectedElement = document.getElementById(serviceType + '_but');
//     const parent = event.target.closest(".service-nav-child");
//     parent.classList.add('active');

//     const serviceInfos = document.querySelectorAll('.service-main'); 
//     serviceInfos.forEach(function(info) {
//         info.style.display = 'none';
//     });
    
//     const selectedInfo = document.getElementById('service-info-' + serviceType);
//     selectedInfo.style.display = 'block';
 
// }



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




//JSON
fetch('https://gist.githubusercontent.com/a0335487/5073a29953069a00aae5b6e3e7e1ca9b/raw/e5fded489c03c8a24ef64431fac93008a7c70c57/data.json')
.then(response => response.json())
.then(data => {
    const navTitles = document.querySelectorAll('.scroll-nav h5');
    navTitles.forEach(function(title, index) {
        title.innerText = data.items[index].title;
    });
})
.catch(error => console.error('Error:', error));

function showService(event, serviceName) {
    fetch('https://gist.githubusercontent.com/a0335487/5073a29953069a00aae5b6e3e7e1ca9b/raw/e5fded489c03c8a24ef64431fac93008a7c70c57/data.json')
    .then(response => response.json())
    .then(data => {
        const service = data.items.find(item => item.title === serviceName);
        
        if (service) {
            document.getElementById('service-title').innerText = service.title;
            document.getElementById('service-description').innerText = service.description;
            document.getElementById('service-img').src = "img/" + service.img;

            const serviceElements = document.querySelectorAll('.service-nav-child'); 
            serviceElements.forEach(function(element) {
                element.classList.remove('active');
            });

            const parent = event.target.closest(".service-nav-child");
            parent.classList.add('active');
        }
    })
    .catch(error => console.error('Error:', error));
}