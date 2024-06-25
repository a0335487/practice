
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
const scrollNav = document.querySelector('.scroll-nav');
let serviceData = null;

fetch('https://gist.githubusercontent.com/a0335487/5073a29953069a00aae5b6e3e7e1ca9b/raw/e5fded489c03c8a24ef64431fac93008a7c70c57/data.json')
  .then(response => response.json())
  .then(data => {
    serviceData = data;
      
    for (let i = 0; i < data.items.length; i++) {
      const serviceNavChild = document.createElement('div');
      serviceNavChild.classList.add('service-nav-child');
      const h5 = document.createElement('h5');
      h5.innerText = data.items[i].title;
      serviceNavChild.appendChild(h5);
      scrollNav.appendChild(serviceNavChild);
    }

    const serviceNavChildren = document.querySelectorAll('.service-nav-child');
    serviceNavChildren[0].classList.add('active');

    document.getElementById('service-title').innerText = data.items[0].title;
    document.getElementById('service-description').innerText = data.items[0].description;
    document.getElementById('service-img').src = "img/" + data.items[0].img;

    serviceNavChildren.forEach(function(child) {
      child.addEventListener('click', function(event) {
        const serviceName = child.querySelector('h5').innerText;
        showService(event, serviceName);
      });
    });
  })
  .catch(error => console.error('Error:', error));

function showService(event, serviceName) {
    const service = serviceData.items.find(item => item.title === serviceName);
    if (service) {
        const serviceElements = document.querySelectorAll('.service-nav-child');
        serviceElements.forEach(function(element) {
            element.classList.remove('active');
        });

        document.getElementById('service-title').innerText = service.title;
        document.getElementById('service-description').innerText = service.description;
        document.getElementById('service-img').src = "img/" + service.img;
        const parent = event.target.closest(".service-nav-child");
        parent.classList.add('active');
    }
}


//ФОРМА 
const formServ = document.querySelector('.form-serv');
const dropdownMenu = document.querySelector('.dropdown-menu');
const h6Element = document.querySelector('.form-serv h6');

formServ.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

    if (dropdownMenu.style.display === 'block') {
        formServ.classList.add('active');
    } else {
        formServ.classList.remove('active');
    }
});

dropdownMenu.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        h6Element.textContent = e.target.textContent;
        h6Element.style.color = '#fff';
        dropdownMenu.style.display = 'none';
        formServ.classList.remove('active');
    }
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.form-row')) {
        dropdownMenu.style.display = 'none';
        formServ.classList.remove('active');
    }
});


//ПРИКРЕПИТЬ ФАЙЛ
var fileInput = document.getElementById('file-upload');
var fileName = document.getElementById('file-name');
var addFile = document.querySelector('.file-but .add');
var delFile = document.querySelector('.file-but .del-file');
var fileBut = document.querySelector('.file-but');
function updateFileName() {    
    fileName.innerText = fileInput.files[0].name;
    addFile.style.display = 'none';
    delFile.style.display = 'block';
    fileBut.style.justifyContent = 'start';
}
function deleteFile(event){
    event.stopPropagation();
    fileInput.value = null; 
    fileName.innerText = 'Прикрепить файл';
    addFile.style.display = 'block';
    delFile.style.display = 'none';
    fileBut.style.justifyContent = 'center';
}


//валидация формы
// document.getElementById('orderForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Предотвращаем отправку формы
//   const serv = document.querySelector('.form-serv h6').textContent;
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('mail').value;
//   const phone = document.getElementById('phone').value;
//   const message = document.getElementById('message').value;

//   if (!name || !email || !phone || !message) {
//       document.getElementById('servError').innerText = 'Услуга' ? "Укажите услугу" : "";
//       document.getElementById('nameError').innerText = !name ? "Укажите имя" : "";
//       document.getElementById('mailError').innerText = !email ? "Укажите email" : "";
//       document.getElementById('phoneError').innerText = !phone ? "Укажите телефон" : "";
//       document.getElementById('messageError').innerText = !message ? "Укажите задачи" : "";
//   } else if (!isValidEmail(email)) {
//       document.getElementById('mailError').innerText = 'Введите корректный Email';
//   } else {
//       document.getElementById('orderForm').submit(); // Отправим форму, если все поля заполнены верно
//   }
// });

// function isValidEmail(email) {
//   // Регулярное выражение для проверки email
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return emailPattern.test(email);
// }