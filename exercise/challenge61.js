console.log('challenge 61')


let divideIntoOdd = (num)=>{
    return num%2 ===0 ? [num/2 -1 , num/2 +1]:[num]
};

console.log(divideIntoOdd(8))
console.log(divideIntoOdd(18))
console.log(divideIntoOdd(28))