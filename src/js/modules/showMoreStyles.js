import { getResourse } from "../services/requests";

const showMoreStyles = (triggerSelector, parentSelector) =>{

    const triggerButton = document.querySelector(triggerSelector);
    const parent = document.querySelector(parentSelector);

    function createNewCard(response){
        response.forEach(({src, title, link}) => {
            let newCard = document.createElement('div');

            newCard.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            newCard.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            parent.appendChild(newCard);

        });
    }

    triggerButton.addEventListener('click', ()=>{
        getResourse('http://localhost:3000/styles').then(res => createNewCard(res));
        triggerButton.remove();
    });

};

export default showMoreStyles;