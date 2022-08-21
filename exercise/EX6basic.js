console.log("leap year")
var leap = document.getElementById("leapYear");
let btn = document.getElementById("leapCheck");

// console.log(leap.value)
btn.addEventListener('click' , function(){
    let i = document.getElementById('show');
    let value = leap.value

    let leapYearCheck = (value % 100 === 0)? (value % 400 === 0): ( value % 4 === 0); 
    if(leapYearCheck == true){
        // console.log( "leap year")
        i.innerText = `${value} is a leap year`
        return i
    }else{
//    console.log("not a leap year")
        i.innerText = `${value} is not a leap year`
        return i
    }
})
