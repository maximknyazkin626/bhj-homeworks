let rotators = Array.from(document.querySelectorAll(".rotator__case"));

function changeAdd() {
  let active = document.querySelector(".rotator__case_active");
  let next = active.nextElementSibling;

  if (!next || !next.classList.contains('rotator__case')) {
    next = rotators[0];
  }

  active.classList.remove("rotator__case_active");
  next.classList.add("rotator__case_active");

}

setInterval(changeAdd, 1000);
