function startNavBarAnimation() {
  let id = null;
  const element = document.getElementById("navTitle");
  let text = element.innerHTML;
  let textLength = text.length;
  let i = 1;
  clearInterval(id);
  id = setInterval(typeText, 50);
  function typeText() {
    element.innerHTML = text.substr(0, i);
    if (i == textLength){ 
      clearInterval(id); 
      underscoreAnimation(); }
    else { 
      i++; 
    }
  }
}

function typeOutText(text) {
  let id = null;
  const element = document.getElementById("navTitle");
  let textLength = text.length;
  let i = 1;
  clearInterval(id);
  id = setInterval(typeText, 50);
  function typeText() {
    element.innerHTML = text.substr(0, i);
    if (i == textLength){ 
      clearInterval(id); 
      underscoreAnimation(); }
    else { 
      i++; 
    }
  }
}
function underscoreAnimation() {
  let id = null;
  const element = document.getElementById("navTitle");
  let text = element.innerHTML; 
  let i = 0;
  let underscore = 0;
  clearInterval(id);
  id = setInterval(animateUnderscore, 800);
  function animateUnderscore() {
    if (i == 6){ 
      clearInterval(id); 
      deleteText();
    }
    else { 
      i++;
      if (underscore) {
        element.innerHTML = text;
        underscore = 0;
      }
      else {
        element.innerHTML = text + "_";
        underscore = 1;
      }
    }
  }
}

function deleteText() {
  let id = null;
  const element = document.getElementById("navTitle");
  let text = element.innerHTML;
  let textLength = text.length;
  let i = textLength;
  clearInterval(id);
  id = setInterval(deleteText, 50);
  function deleteText() {
    element.innerHTML = text.substr(0, i);
    if (i == 1){ 
      clearInterval(id); 
      typeOutText(text);
    }
    else { 
      i--; 
    }
  }
}

function homeDVDAnimation() {
  let id = null;
  const container = document.getElementById("homeContent");
  const element = document.getElementById("titleCard");
  let x = 0; //container.offsetWidth * 0.5 - element.offsetWidth * 0.5;
  let y = 0; //container.offsetHeight * 0.4;
  let xSpeed = 1.25;
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

