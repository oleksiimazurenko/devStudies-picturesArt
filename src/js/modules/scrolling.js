const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    // Плавное появление кнопки вверх
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Второй способ
    // Данный код представляет функцию плавного скролла к якорным ссылкам на странице.
    // Переменная links содержит все ссылки, начинающиеся с символа #, которые представляют собой якорные ссылки на странице.
    let links = document.querySelectorAll('[href^="#"]'),
    // Переменная speed определяет скорость прокрутки, которая задается как количество пикселей на одну итерацию прокрутки.
        speed = 0.1;
    
    links.forEach(link => {
        // Для каждой ссылки на странице устанавливается обработчик события click. 
        // При клике на ссылку происходит отмена стандартного поведения браузера для ссылок (event.preventDefault()).
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Далее вычисляется текущая позиция скролла (document.documentElement.scrollTop) и расстояние от блока, на который ссылается якорь, до верхней части экрана (toBlock.getBoundingClientRect().top).
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            // Далее, для плавной прокрутки страницы, используется функция requestAnimationFrame(). 
            requestAnimationFrame(step);

            function step(time) {
                // Внутри функции определяется текущее время и вычисляется прогресс скролла (progress = time - start). 
                if (start === null) {
                    start = time;
                }
                // Затем вычисляется новое значение позиции скролла (r), которое зависит от времени и расстояния до блока. 
                // Если новое значение позиции скролла не достигло конечного значения, вызывается функция requestAnimationFrame() для следующей итерации прокрутки, иначе устанавливается хеш в адресной строке браузера (location.hash = hash), чтобы подсветить активный якорь на странице.
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


    // // Первый способ. На чистом JS
    // // Код отвечает за плавную прокрутку к нужному элементу при нажатии на кнопку с атрибутом href, указывающим на id целевого элемента.
    // // Сначала определяются переменные element и body, которые соответствуют корневому элементу страницы и элементу body.
    // const element = document.documentElement,
    //       body = document.body;
    // // Затем объявляются две функции: calcScroll() и smoothScroll(from, to, hash).
    // // Функция calcScroll() добавляет обработчик клика на кнопку со стрелкой вверх (upElem). 
    // // Когда происходит клик на эту кнопку, определяется текущее положение скролла на странице, и если у кнопки указан атрибут href, то выполняется плавная прокрутка к элементу, на который ссылается этот атрибут.
    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };
    // // Функция smoothScroll(from, to, hash) отвечает за плавную прокрутку. 
    // // Она принимает три аргумента: from - начальное положение скролла, to - конечное положение скролла, и hash - хэш, который будет добавлен к URL страницы.
    // // Внутри функции вычисляется скорость прокрутки в зависимости от того, в какую сторону нужно прокручивать страницу. 
    // // Затем выполняется setInterval, который каждые timeInterval миллисекунд изменяет положение скролла на странице, пока не достигнут конечный элемент. 
    // // Если прокрутка завершена, то функция clearInterval останавливает выполнение интервала. 
    // // Также функция использует history.replaceState(), чтобы добавить хэш к URL страницы.
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }
        
    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    // // Наконец, вызывается функция calcScroll(), чтобы добавить обработчик клика на кнопку со стрелкой вверх.
    // calcScroll();
};

export default scrolling;