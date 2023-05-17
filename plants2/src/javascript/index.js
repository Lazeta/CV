/* *RU* Данный обработчик будет действовать на разрешении экрана менее 
или равный 768 пикселей.
This handler will operate at screen resolutions less than
or equal to 768 pixels.
*/
if (window.innerWidth <= 768){
    /* *RU* Для бургер меню из 4 полос где по нажатия всплывает окно навигации по сайту.
    Фиксируем константы нашего меню навигации и иконки меню.
    For a burger menu of 4 lanes where, when clicked, a site navigation window pops up.
    We fixed the constants of our navigation menu and menu icon.
    */
    const burgerIcon = document.querySelector('.gamburger');
    const burgerMenu = document.querySelector('.nav__bar')

    /* *RU* Получаем кнопку меню бургер и добавляем обработчик события click,
    где добавляем или удаляем класс в зависимости от того есть он уже или нет.
    Get the burger menu button and add a click event handler,
    where we add or remove a class, depending on whether it already exist or not.
    */
    // burgerIcon.addEventListener("click", function () {
    //     burgerIcon.classList.toggle('__active');
    //     burgerMenu.classList.toggle('__gamburger');
    // });
    burgerIcon.addEventListener("click", function () {
        if (burgerIcon.classList.contains('__active')){
            burgerIcon.classList.remove('__active');
            burgerMenu.classList.remove('__gamburger');
            burgerMenu.classList.add('close')
            setTimeout(function() {
                burgerMenu.classList.remove('close');
              }, 700);
        } else {
            burgerIcon.classList.add('__active');
            burgerMenu.classList.add('__gamburger');
            burgerMenu.classList.remove('close')
        }
    });


    // *RU* Добавляем обработчик нажатия на клавишу Escape для закрытия меню.
    // Add a handler for pressing the Escape key to close the menu.
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' || e.key === 'Esc') { 
            if(burgerIcon.classList.contains('__active')) {
                burgerIcon.classList.remove('__active');
                burgerMenu.classList.remove('__gamburger');
                burgerMenu.classList.add('close');
                setTimeout(function() {
                    burgerMenu.classList.remove('close');
                }, 700);
            }
        };
    });

    // *RU* Будем скрывать меню если кликать вне списка за его пределами.
    // We will hide the menu if you click outside the list outside of it.
    document.addEventListener('click', function(e) {
            if(burgerIcon.classList.contains('__active')) {
                if (!burgerIcon.contains(e.target) && !burgerMenu.contains(e.target)){
                    burgerMenu.classList.remove('__gamburger');
                    burgerIcon.classList.remove('__active');
                    burgerMenu.classList.add('close');
                    setTimeout(function() {
                        burgerMenu.classList.remove('close');
                    }, 700);
            }
        }
    });
    // *RU* Получаем ссылки меню и добавляем обработчик события click.
    // Get the menu links and add a click event handler.
    const menuLinks = document.querySelectorAll('.menu-link');
    for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
        // *RU* Закрываем меню.
        // Close the menu.
        if (burgerMenu.classList.contains('__gamburger')) {
            burgerMenu.classList.remove('__gamburger') 
            burgerMenu.classList.add('close');
            setTimeout(function() {
                burgerMenu.classList.remove('close');
            }, 700);
        }
        if (burgerIcon.classList.contains('__active')) {
            burgerIcon.classList.remove('__active') 
        }
        // *RU* Получаем якорь и осуществляем переход.
        // We get the anchor and make the thansition.
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
            });
        }
        e.preventDefault();
        });
    }
    // *RU* Функция плавного скроллинга к якорю
    // Function of smooth scrolling to the anchor
    function smoothScroll(target) {
        const element = document.querySelector(target);
        const offsetTop = element.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    };

    /* *RU* Добавляет обработчик клика на все ссылки с классом menu-link и 
    атрибутом href, начинающийся с символа #. Когда кликаем по ссылке, 
    скрипт вызывает функцию smoothScroll что находит элемент с 
    указанным индефикатором, вычисляет его вертикальное смещение относительно 
    начала документа и плавно прокручивает страницу до указанного элемента. 
    При этом заголовок не багается, остаётся на своём месте. 
    Adds a click handler to all links with class menu-link and
    href attribute, starting with the # character.
    When we click on the link, the script calls the smoothScroll function.
    which finds the element with the specified id, calculates its vertical
    offset from the beginning of the document and smoothly scrolls the page 
    to the specified element. At the same time, the title is not bugged, 
    it remains in its place.
    */
    document.querySelectorAll(".menu-link[href^='#']").forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute("href"));
        });
    });
}





// // *RU* Функция смены цвета заднего фона на размерах от 1440 пикселей более.
// // Function changed color background color on size from 1440px and more.
// const btnColor = document.querySelector('.__changer');
// function random(number){
//     return Math.floor(Math.random() * (number+1))
// };
// btnColor.onclick = function(){
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// };