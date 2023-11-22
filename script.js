
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
  color.style.backgroundColor = getRandomColor();
  color.style.border = "dashed 1rem";
  color.style.borderColor = getRandomColor();
  color.style.padding = "20px";
  
  const about = document.querySelector("h2");
  about.style.border = "2px solid black";

  const tryAgain = document.querySelector("button");
  tryAgain.innerHTML = "Try Again";
}


