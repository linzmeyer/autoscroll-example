let scrollY = 0;
let distance = 40;
let slowScrollSpeed = 30;
let quickScrollSpeed = 0;

function autoScrollTo(elementId) {
  console.log(document.getElementById(elementId).offsetTop);


  let currentY = window.pageYOffset;
  let targetY = document.getElementById(elementId).offsetTop;

  let bodyHeight = document.body.offsetHeight;
  let yPosition = currentY + window.innerHeight;

  let timeoutID = setTimeout(()=>autoScrollTo(elementId), slowScrollSpeed);

  if (yPosition > bodyHeight) {
    clearTimeout(timeoutID);
  } else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(timeoutID);
    }
  }

}


function resetScroller(elementId) {
  let currentY = window.pageYOffset;
  let targetY = document.getElementById(elementId).offsetTop;
  let timeoutId = setTimeout(()=>resetScroller(elementId), quickScrollSpeed);
  if (currentY > targetY) {
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(timeoutId);
  }
}