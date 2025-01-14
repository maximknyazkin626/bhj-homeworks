let reveals = Array.from(document.querySelectorAll(".reveal"));

window.scroll(10, 100);

//--------------------------------------------------
// for (el of reveals) {
//   const { top, bottom, x, y } = el.getBoundingClientRect();
//   setInterval(() => {
//     console.log(top, bottom, x, y);
//   }, 3000);
//   el.classList.add("reveal_active");
// }
//---------------------------------------------------
// function isVisible(el) {
//   const { top, bottom } = el.getBoundingClientRect();

//   if (bottom < 0) {
//     el.classList.remove("reveal_active");
//   }

//   if (top > window.innerHeight) {
//     el.classList.remove("reveal_active");
//   }

//   el.classList.add("reveal_active");
// }
