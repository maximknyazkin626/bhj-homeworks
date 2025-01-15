let reveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", function () {
  reveals.forEach((el) => {
    findElem(el);
  });
});

function findElem(el) {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom > 0 && top < window.innerHeight) {
    el.classList.add("reveal_active");
    console.log("Элемент видно");
  } else {
    el.classList.remove("reveal_active");
    console.log("Элемент НЕ видно");
  }
}
