console.log("challenge 46");

const remove =(a,b)=>{
    return a.filter(e=>  !b.includes(e));
}

console.log(remove([1,2,3],[2]))



const rem = ( a,b)=>{
    return a.filter(e => b.indexOf(e) === -1);
}

let b = [1,2,3,4]
console.log(b.indexOf(3))

console.log(rem([1,2,3],[1]))