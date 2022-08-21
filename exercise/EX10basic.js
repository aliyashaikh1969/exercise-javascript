console.log("Multiplication and division");
let firstNum = document.getElementById("1stNumber");
// console.log(firstNum)
let secNum = document.getElementById("2ndNumber");
let multipleBtn = document.getElementById("multiple");
let diviBtn = document.getElementById("divide");
let output = document.getElementById('result');

multipleBtn.addEventListener('click', function(){
    let mResult = firstNum.value*secNum.value;
    output.innerText = `The Result is : ${mResult}`
    firstNum.value = "";
    secNum.value = "";
    // output.innerText = `The Result is :`
})

function divide(){
    let divResult = firstNum.value/secNum.value;
    output.innerText = `The Result is : ${divResult}`
    firstNum.value = "";
    secNum.value = "";
    // output.innerText = `The Result is :`
    
}