
// Код описывает функцию drop, которая создает драг-энд-дроп функциональность для элементов формы, имеющих атрибут name="upload".

const drop = () => {
    // Сначала мы получаем все элементы формы с атрибутом name="upload".
    const fileInputs = document.querySelectorAll('[name="upload"]');
    // Добавляем обработчики событий 'dragenter', 'dragleave', 'dragover', 'drop' на каждый из них. 
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
    // Обработчик preventDefaults используется для предотвращения стандартных действий браузера по умолчанию для событий.
        e.preventDefault();
        e.stopPropagation();
    }
    // Функции highlight и unhighlight используются для изменения стилей элемента, когда файл находится над элементом (highlight) или покидает элемент (unhighlight).
    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }
    // Добавляем обработчики событий 'dragenter', 'dragover' на каждый элемент формы и вызываем функцию highlight при наведении на элемент. 
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    // Для событий 'dragleave', 'drop' мы добавляем обработчики событий и вызываем функцию unhighlight при покидании элемента.
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });
    // Наконец, мы добавляем обработчик события 'drop' для каждого элемента формы, который устанавливает значение files на перетаскиваемый файл и обновляет текстовое содержимое родительского элемента, отображая имя выбранного файла.
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};
// Экспортируем функцию drop для использования в других частях кода.
export default drop;