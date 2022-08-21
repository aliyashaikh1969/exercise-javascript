console.log('random number ');


function ex8(){
 let number =Math.ceil( Math.random()*10);
 let gnum = prompt("Guess a number between 0 to 10");
  let num=(gnum == number)? "match": `Not match the number is ${number}`
 let guess = document.getElementById("guessNumber");
//  console.log(guess.innerText)
 guess.innerText =num
}