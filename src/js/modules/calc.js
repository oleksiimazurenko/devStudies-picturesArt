const calc = (size, material, options, promocode, result, modalState) => {

    const sizeBlock = document.querySelectorAll(size),
          materialBlock = document.querySelectorAll(material),
          optionsBlock = document.querySelectorAll(options),
          promocodeBlock = document.querySelectorAll(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock[0].value) * (materialBlock[0].value) + (+optionsBlock[0].value));

        if(sizeBlock[0].value == '' || materialBlock[0].value == '') {
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
        }else if(promocodeBlock[0].value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        }else{
            resultBlock.textContent = sum;
        }
    };

    const calcForm = (event, element, prop) =>{
        
        element.forEach(item=>{
            item.addEventListener(event, ()=>{

                switch(item.nodeName){
                    case 'INPUT':
                        modalState[prop] = item.value;
                        break;
                    case 'SELECT':
                        modalState[prop] = item.value;
                        break;
                }   
                console.log(modalState);
            });
        });
    };


    sizeBlock[0].addEventListener('change', calcFunc);
    materialBlock[0].addEventListener('change', calcFunc);
    optionsBlock[0].addEventListener('change', calcFunc);
    promocodeBlock[0].addEventListener('input', calcFunc);
    
    calcForm('change', sizeBlock, 'size-picture');
    calcForm('change', materialBlock, 'material-picture');
    calcForm('change', optionsBlock, 'options-block');
    calcForm('input', promocodeBlock, 'promocode-block');

    
};



export default calc;