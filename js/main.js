
// Открыть список в footer
function openFooter(event){
    const parent = event.target.closest(".foot-col");
    if( window.innerWidth <= 767 ){
        parent.classList.toggle("show");
    }  
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


//JSON

const serviceNavChildren = document.querySelectorAll('.service-nav-child');
    
serviceNavChildren.forEach(function(child) {
    child.addEventListener('click', function(event) {
        const serviceName = child.querySelector('h5').innerText;
        showService(event, serviceName);
    });

    fetch('https://gist.githubusercontent.com/a0335487/5073a29953069a00aae5b6e3e7e1ca9b/raw/e5fded489c03c8a24ef64431fac93008a7c70c57/data.json')
    .then(response => response.json())
    .then(data => {
        const navTitles = document.querySelectorAll('.scroll-nav h5');
        navTitles.forEach(function(title, index) {
            title.innerText = data.items[index].title;
        });
        document.getElementById('service-title').innerText =  data.items[0].title;
        document.getElementById('service-description').innerText = data.items[0].description;
        document.getElementById('service-img').src = "img/" + data.items[0].img;
    })
    .catch(error => console.error('Error:', error));
});

function showService(event, serviceName) {
    fetch('https://gist.githubusercontent.com/a0335487/5073a29953069a00aae5b6e3e7e1ca9b/raw/e5fded489c03c8a24ef64431fac93008a7c70c57/data.json')
    .then(response => response.json())
    .then(data => {
      
        const serviceElements = document.querySelectorAll('.service-nav-child'); 
        serviceElements.forEach(function(element) {
            element.classList.remove('active');
        }); 
        
        const service = data.items.find(item => item.title === serviceName);
        if (service) {
            document.getElementById('service-title').innerText = service.title;
            document.getElementById('service-description').innerText = service.description;
            document.getElementById('service-img').src = "img/" + service.img;
            const parent = event.target.closest(".service-nav-child");
            parent.classList.add('active');
        }
    })
    .catch(error => console.error('Error:', error));
}

