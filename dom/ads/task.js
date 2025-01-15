let rotators = Array.from(document.querySelectorAll(".rotator__case"));

function changeAdd() {
  for (let i = 0; i < rotators.length; i++) {
    console.log(rotators[i]);
    console.log(rotators[i + 1]);
  }
}

setInterval(changeAdd, 1000);

// rotators[i].classList.remove("rotator__case_active");
// rotators[i + 1].classList.add("rotator__case_active");
