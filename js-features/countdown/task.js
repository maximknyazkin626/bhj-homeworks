let timer = Number(document.getElementById('timer').textContent);

function timerDecrease() {
    if (timer > 0) {
        timer--;
        document.getElementById('timer').textContent = timer;
    }
    
    if (timer === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    } 
}

let interval = setInterval(timerDecrease,1000);



