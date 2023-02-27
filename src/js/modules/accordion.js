// Первый вариант

// const accordion = (headSelector, descriptionSelector) =>{

//    const heads = document.querySelectorAll(headSelector),
//          descr = document.querySelectorAll(descriptionSelector);

//     const hideItems = () =>{

//         heads.forEach(head =>{
//             head.style.color = '#333';
//             // head.style.transition = '1s';
//             head.classList.remove('active');
//         });
//         descr.forEach(item =>{
//             item.style.display = 'none';
//             item.classList.add('animated', 'fadeInUp');
//             item.classList.remove('fadeInDown');
//         });

//     }; 
//     hideItems();

//     const showItem = (i) =>{
         
//         heads[i].style.color = '#74226C';
//         heads[i].style.transition = '1s';
//         heads[i].classList.add('active');

//         descr[i].style.display = 'block';
//         descr[i].classList.add('animated', 'fadeInDown');
//         descr[i].classList.remove('fadeInUp');

//     };

//     heads.forEach((head, i) =>{
//         head.addEventListener('click', () =>{
//             hideItems();
//             showItem(i);
//         }); 
//     });

// };

// export default accordion;

//----------------------------------------------------------------------------------------- 

// // Второй вариант

// const accordion = (triggersSelector, itemsSelector) =>{

//     const btns = document.querySelectorAll(triggersSelector),
//           blocks = document.querySelectorAll(itemsSelector);

//     blocks.forEach(block =>{
//         block.classList.add('animated', 'fadeInDown');
//     });

//     btns.forEach(btn =>{
//         btn.addEventListener('click', (e)=>{
//             if(!e.currentTarget.classList.contains('active')){
//                 btns.forEach(btn => btn.classList.remove('active', 'active-style'));
//                 e.currentTarget.classList.add('active', 'active-style');
//             }
//         }); 
//     });
    
    // Дальше я добавил в css такие стили:
    // .often-questions .accordion-heading.active+.accordion-block{
        // display: block;
    // }
    // .often-questions .accordion-block {
    //     display: none;
    // }
    // .often-questions p.active-style span{
    //     color: #e950D7;
    //     font-weight: 900;
    //     text-decoration: none;
    //     border: 0; 
    // }
    
// };

// export default accordion;

// -------------------------------------------------------------------------------------

// Третий вариант

const accordion = (triggersSelector) =>{

    const btns = document.querySelectorAll(triggersSelector);
    let qSwich = true;
    btns.forEach(btn => {
        btn.addEventListener('click', e =>{
            const cTarget = e.currentTarget;
            // Пришлось костыли ставить так как toggle не работает если с самого начала небудет стоять класс с которым он будет работать.
            if(qSwich){
                cTarget.classList.toggle('active-style', true);
                cTarget.nextElementSibling.classList.toggle('active-content', true);
                qSwich = false;
            }else{
                cTarget.classList.toggle('active-style', false);
                cTarget.nextElementSibling.classList.toggle('active-content',false);
                qSwich = true;
            }

            if(cTarget.classList.contains('active-style')) {
                cTarget.nextElementSibling.style.maxHeight = cTarget.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                cTarget.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    // Дальше я добавил в css такие стили:

    // .often-questions p.active-style span{
    //     color: #e950D7;
    //     font-weight: 900;
    //     text-decoration: none;
    //     border: 0; 
    // }
    // .often-questions .accordion-heading.active+.accordion-block{
    //     display: block; 
    // }
    // .often-questions .accordion-block {
    //   background-color: #f7e7e6;
    //   max-height: 0;
    //   opacity: 0;
    //   transition: all 0.3s ease-out;
    //   overflow: hidden;
    // }
    // .often-questions .accordion-block.active-content{
    //     overflow: visible;
    //     opacity: 1;
    //     margin-top: 1rem;
    //     padding: 3rem 4rem;
    // }
    
    
};

export default accordion;