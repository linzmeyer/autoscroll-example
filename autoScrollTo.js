let count;
do {
  count = parseInt(prompt('How many sections would you like?', 10));
  
} while (isNaN(count));

const scrollIntoViewOptions = {
  block: "start",
  inline: "nearest",
  // behavior: "smooth" <-- handled by css!
}



// **********************************************
// *** EVENT HANDLERS
// **********************************************
function handleScrollIntoView(e) {
  const el = document.getElementById(`div${e.target.value}`);
  el.scrollIntoView(scrollIntoViewOptions);
}

function handleScrollToTop(e) {
  const el = document.getElementById("myheading");
  el.scrollIntoView(scrollIntoViewOptions);
}



// **********************************************
// *** RENDERS
// **********************************************
function renderContentBoxes(num) {
  num = Number(num);

  const contentBoxContainer = document.getElementById('contentbox-container');

  for ( let i = 1; i < num; i++) {
    const contentBoxNode = document.createElement('div');
    const divTextNode = document.createTextNode(`Content Section ${i}`);
    contentBoxNode.appendChild(divTextNode);
    contentBoxNode.classList.add('contentbox');
    contentBoxNode.setAttribute('id', `div${i}`);

    contentBoxContainer.appendChild(contentBoxNode);

    const backToTopBtn = document.createElement('button');
    backToTopBtn.setAttribute('value', i)
    backToTopBtn.addEventListener('mousedown', handleScrollToTop);
    const textNode = document.createTextNode("Go To Top");
    backToTopBtn.appendChild(textNode);
    contentBoxNode.appendChild(backToTopBtn);
  }

}


function renderBtns(num) {

  num = Number(num);
  const btnsContainer = document.getElementById('btns-container');

  for ( let i = 1; i < num; i++) {

    const btnNode = document.createElement("button");
    btnNode.setAttribute('id', `btn${i}`);
    btnNode.setAttribute('value', i);
    btnNode.addEventListener('mouseup', handleScrollIntoView)

    const textNode = document.createTextNode(`Go To Section ${i}`)
    btnNode.appendChild(textNode);

    btnsContainer.appendChild(btnNode);
  }
}


renderBtns(count);
renderContentBoxes(count);