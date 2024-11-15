let tabs = Array.from(document.querySelectorAll(".tab"));
let tab_contents = Array.from(document.querySelectorAll(".tab__content"));



for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove('tab_active'));

        tabs[i].classList.add('tab_active');

        tab_contents.forEach(content => content.classList.remove('tab__content_active'));

        tab_contents[i].classList.add('tab__content_active');
    }
    );
    
}

// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//         // Убираем класс .tab_active у всех вкладок
//         tabs.forEach(t => t.classList.remove('tab_active'));
        
//         // Присваиваем класс .tab_active только текущей вкладке
//         tab.classList.add('tab_active');

//         // Убираем класс .tab__content_active у всех содержимых
//         tab_contents.forEach(content => content.classList.remove('tab__content_active'));
        
//         // Присваиваем класс .tab__content_active только соответствующему содержимому
//         tab_contents[index].classList.add('tab__content_active');
//     });
// });