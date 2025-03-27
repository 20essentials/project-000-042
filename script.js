let pairs = [
  [90, -25],
  [90, 0],
  [90, 25],
  [180, -25],
  [180, 0],
  [180, 25]
];
let i = -1;

document.addEventListener('click', e => {
  if (e.target.matches('.box')) {
    if (i <= 4) i++;
    else i = 0;
    e.target.style.setProperty(
      'transform',
      `rotateZ(${pairs[i][0]}deg) rotateY(${pairs[i][1]}deg)`
    );
  }
});
