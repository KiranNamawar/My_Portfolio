
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorise() {
  const color = document.querySelector("article");
  // color.style.backgroundColor = getRandomColor();
  color.style.border = "dashed 0.5rem";
  color.style.borderColor = getRandomColor();
  color.style.padding = "20px";
  color.style.fontFamily ="cursive";
  color.style.borderRadius = "20px";

  // const colorText = document.querySelectorAll("article p");
  // for (let i = 0; i < colorText.length; i++) {
  //   colorText[i].style.color = getRandomColor();
  
  const about = document.querySelector("h2");
  about.style.border = "4px dotted";
  about.style.borderColor = getRandomColor();

  const tryAgain = document.querySelector("button");
  tryAgain.innerHTML = "Try Again";
}


