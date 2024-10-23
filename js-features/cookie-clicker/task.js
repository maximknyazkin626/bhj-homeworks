let clickerCounter = Number(document.getElementById('clicker__counter').textContent);
let cookie = document.getElementById('cookie');

function changeSize() {
    while (clickerCounter > 0) {
        if (clickerCounter % 2 !== 0) {
            return cookie.width += 20;
        } else {
            return cookie.width -= 20;
        }
    }
}

function click() {
    clickerCounter++;
    document.getElementById('clicker__counter').textContent = clickerCounter;
    changeSize();
}


cookie.onclick = click;