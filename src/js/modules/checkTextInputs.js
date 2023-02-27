const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });

    txtInputs.forEach(input =>{
        input.addEventListener('input',(e) => {
            // Получаем введенный текст
            const inputText = e.target.value;
            // Удаляем все символы, кроме латинских букв
            const filteredText = inputText.replace(/[^Аа-яё 0-9]/g, '');
            // Обновляем значение поля ввода
            e.target.value = filteredText;
        });
    });

};

export default checkTextInputs;