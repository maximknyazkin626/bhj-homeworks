let xhr = new XMLHttpRequest();
let loader = document.getElementById('loader');
let itemsContainer = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        if (xhr.status === 200) { // Проверяем, что запрос был успешным
            const response = JSON.parse(xhr.responseText); // Парсим ответ
            const valute = response.response.Valute; // Получаем валюты

            // Перебираем все валюты и создаем необходимые элементы
            for (let key in valute) {
                const currency = valute[key];
                
                // Создаём контейнер для одной валюты
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item'); // Добавляем класс для стилей, если это нужно

                // Создаём элементы для кода, значения и валюты
                const codeDiv = document.createElement('div');
                codeDiv.classList.add('item__code');
                codeDiv.textContent = currency.CharCode; // Заполняем код валюты

                const valueDiv = document.createElement('div');
                valueDiv.classList.add('item__value');
                valueDiv.textContent = currency.Value; // Заполняем значение валюты

                const currencyDiv = document.createElement('div');
                currencyDiv.classList.add('item__currency');
                currencyDiv.textContent = 'руб.'; // Указываем валюту, например, рубли

                // Добавляем созданные элементы в контейнер
                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);
                itemsContainer.appendChild(itemDiv); // Добавляем в общий контейнер
            }
        } else {
            console.error('Ошибка загрузки данных: ' + xhr.status); // Обработка ошибок
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
loader.classList.add("loader_active");
xhr.send();