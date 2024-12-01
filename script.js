function homeDVDAnimation() {
  console.log("Animation played");
  let id = null;
  const container = document.getElementById("homeContent");
  const element = document.getElementById("titleCard");
  let x = 0; //container.offsetWidth * 0.5 - element.offsetWidth * 0.5;
  let y = 0; //container.offsetHeight * 0.4;
  let xSpeed = 1.5;
  let ySpeed = 1;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (x < 0) {
      x = 0;
      xSpeed *= -1;
    }
    else if (x > (container.offsetWidth - element.offsetWidth) ) {
      x = (container.offsetWidth - element.offsetWidth);
      xSpeed *= -1;
    }
    else if (y < 0) {
      y = 0;
      ySpeed *= -1;
    }
    else if (y > (container.offsetHeight - element.offsetHeight) ) {
      y = (container.offsetHeight - element.offsetHeight)
      ySpeed *= -1;
    }
    x += xSpeed;
    y += ySpeed;
    element.style.left = x + "px";
    element.style.top = y + "px";
  }
}
