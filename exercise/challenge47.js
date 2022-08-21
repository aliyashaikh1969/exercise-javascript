console.log("challenge 47")


const check =(a,b)=>{
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);


    if(aKeys.length == bKeys.length){
       return aKeys.every(key=>{
           return a[key]===b[key]
        });
    }
    return false
    // return [aKeys ,bKeys]
}



let aobj = { name:"abc",email:"test@.com"}
let bobj = { name:"abc",email:"test@.com"}

console.log(check(aobj,bobj))