const pictureSize = (imgSelector) =>{
    // Берем все блоки на которые будет наводится указатель
    const blocks = document.querySelectorAll(imgSelector);

    const showImg = (block) =>{
        // Берем картинку которая в блоке
        const img = block.querySelector('img');
        // Перем путь каритнки и отрезаем последние 4 символа и добавляем свои.
        img.src = img.src.slice(0, -4) + '-1.png';
        // Перебираем все p в блоке и скрываем их.
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
        img.classList.add('animated', 'bounceIn');
    };


    const hideImg = (block) =>{
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
        img.classList.remove('animated', 'bounceIn');
    };

    // Перебераеим блоки для того чтоб повесить на каждый из них слушатель
    blocks.forEach(block =>{
        block.addEventListener('mouseover', () =>{
            showImg(block);
        });
        block.addEventListener('mouseout', () =>{
            hideImg(block);
        });
    });

};

export default pictureSize;
