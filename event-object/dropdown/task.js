const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item')

function showList() {
    dropdownList.classList.toggle("dropdown__list_active");
}

function closeList() {
    dropdownList.classList.toggle("dropdown__list_active"); 
}

dropdownValue.addEventListener("click", showList);

dropdownItems.forEach(item => {
        item.addEventListener("click", closeList);
        item.addEventListener("click", (event) => {
            event.preventDefault();
            dropdownValue.textContent = item.textContent;
    })
})







    

