let getdate = new Date();
let dateex2 = getdate.getDate()
let month = getdate.getMonth()+1;
console.log(month)
let year = getdate.getFullYear();
console.log(year);
if(month < 10){
    month = "0"+ month
}
if(dateex2 <10){
    dateex2 = "0"+ dateex2
}
document.getElementById("date").innerText = dateex2;
document.getElementById("month").innerText = month;
document.getElementById("years").innerText = year;
