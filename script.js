const d = document;

let pairs = [
    [90, -25],
    [90, 0],
    [90, 25],
    [180, -25],
    [180, 0],
    [180, 25],
  ],
  i = -1;

d.addEventListener("click", (e) => {
  if (e.target.matches(".box")) {
    let element = e.target;
    if (i <= 4) {
      i++;
    } else {
      i = 0;
    }
    element.style.setProperty(
      "transform",
      `rotateZ(${pairs[i][0]}deg) rotateY(${pairs[i][1]}deg)`
    );
  }
});
