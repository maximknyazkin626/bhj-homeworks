let dead = Number(document.getElementById('dead').textContent);
let lost = Number(document.getElementById('lost').textContent);

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function endGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

function checkMole(index) {
    if (getHole(index).className.includes( 'hole_has-mole' )) {
        dead ++;
        document.getElementById('dead').textContent = dead;
        if (dead === 10) {
            alert("Ты победил! Молодец!");
            endGame();
        }
    } else {
        lost ++;
        document.getElementById('lost').textContent = lost;
        if (lost === 5) {
            alert("Попробуй ещё раз!");
            endGame();
        }
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => checkMole(i);
}