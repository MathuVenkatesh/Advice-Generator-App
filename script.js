
let randomBtn = document.querySelector('.random-btn');
let randomAdvice = document.querySelector(".adv-txt");
let diceDiv = document.querySelector('.dice-div');
let containerDiv = document.querySelector(".container");
let adviceID = document.querySelector("#advice-id");

function changeClr(){
    diceDiv.classList.add('active')
}

function clearClr() {
  diceDiv.classList.remove("active");
}
randomBtn.addEventListener('click', 

async function getRandomAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");  
  const data = await res.json();
console.log(data.slip,data.slip.id, data.slip.advice, "this is data");
  const user = data.slip.advice;
  let randomNumber = data.slip.id;
    setTimeout(3000);
  randomAdvice.innerHTML = user;
  adviceID.innerHTML = `#${randomNumber}`;
changeClr();
});

window.addEventListener("click", (e) => {
  if (e.target == containerDiv) {
    console.log("inside modal");    
  }
  else{
    console.log('outside');
    clearClr();
  }
});