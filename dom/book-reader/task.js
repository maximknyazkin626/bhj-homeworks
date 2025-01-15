let fontSize = Array.from(document.querySelectorAll(".font-size"));
let bookContent = document.querySelector('.book');

function changeSize(event) {
    event.preventDefault();
    let target = event.target;

    fontSize.forEach((link) => {
        link.classList.remove('font-size_active');
    });

    bookContent.classList.remove('book_fs-small', 'book_fs-big');

    target.classList.add('font-size_active');

    if (target.classList.contains('font-size_small')) {
        bookContent.classList.add('book_fs-small');
    } else if (target.classList.contains('font-size_big')) {
        bookContent.classList.add('book_fs-big');
    }
};

fontSize.forEach((el) => {
    el.addEventListener('click', changeSize);
});