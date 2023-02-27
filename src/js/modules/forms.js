import {postData} from '../services/requests';

const forms = (modalState) => {

    'use strict';

  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        
        statusPattern = {
            success: "Отлично! Мы скоро с вами свяжемся!",
            loading: "Пожалуйста подождите идет загрузка",
            failure: "Что-то пошло не так",
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png',
        },

        path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
        };
    
    const clearInput = () =>{
        inputs.forEach(item => item.value = '');
        upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
    };

    upload.forEach(item =>{
        item.addEventListener('input', ()=>{
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });


    
    const bindPostData = () =>{
        forms.forEach(item => {
            item.addEventListener('submit', (e)=>{
                e.preventDefault();
                
                let statusMessage = document.createElement('div');
                statusMessage.classList.add("status");
                item.parentNode.appendChild(statusMessage);

                item.classList.add('animated', 'fadeOutUp');
                setTimeout(()=> item.style.display = 'none', 100);

                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', statusPattern.spinner);
                statusImg.classList.add('animated', 'fadeInUp');
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement('div');
                textMessage.textContent = statusPattern.loading;
                statusMessage.appendChild(textMessage);

                const formData = new FormData(item);
                console.log(formData);

                if(item.classList.contains('calc_form')){
                    for(let key in modalState){
                        formData.append(key, modalState[key]);
                    }
                }

                let api;

                item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer: api = path.question;

                console.log(api);

                postData(api, formData)
                .then(data =>{
                    console.log(data);
                    statusImg.setAttribute('src', statusPattern.ok);
                    textMessage.textContent = statusPattern.success;
                })
                .catch(()=>{
                    statusImg.setAttribute('src', statusPattern.fail);
                    textMessage.textContent = statusPattern.failure;
                })
                .finally(()=>{

                    // Очистить все инпуты
                    clearInput();

                    // Удалить блок статуса отправки данных на сервер
                    setTimeout(()=>{
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);

                    // Скрыть все модальные окна
                    setTimeout(()=> {
                        document.querySelectorAll('div[data-modal]').forEach(item => item.style.display = 'none');
                        document.body.style.overflow = '';
                    }, 2000);
            
                });
            });
        });
    };
    
    bindPostData();

};


export default forms; 