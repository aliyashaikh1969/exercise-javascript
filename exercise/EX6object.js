console.log("helo world");
// let x = this;
// console.log(x);
const person = {
    first_name : "aliya",
    last_name : "shaikh",
    study : "bcom" 
}
let b = person.first_name +" "+ person.last_name;
console.log(person.first_name +" "+ person.last_name);
console.log(this.first_name + " "+ this.last_name);
let p = this.first_name;
console.log(p)
// document.getElementById("demo").innerText= b;



let person2 = {
    name : "java",
    version : "es6",
    date : 2006,
}

function myfunction(){
    return this.name +" "+ this.version;
}
document.getElementById("demo").innerText = myfunction();